

let model = require("../model/sleepModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {isValid,convertMin,isValidValue} = require("../util/validator")


const userData =  async (req,res)=>{
    try {
   
       let data = req.body
      
   
      let  {nickName,goals,problem,sleepTime,wakeTime,sleepHours,password}=data
   
        
       for(let field in data){
           
       
           if(!isValid(data[`${field}`])){
               return res.status(400).send({message:`Please select ${field}`})
           }
       }
   
       // check: nickName is unique
      
       const check = await model.findOne({nickName:nickName})
       if(check) return res.status(409).send({message:`${nickName} already taken.`})
   
   
       goals = Array.isArray(goals)?goals:[goals]
   
       // validating goals value
       for(let choice of goals){
           if(!isValidValue(choice,1)){
               return res.status(400).send({message:`${choice} is not a valid choice`})
           }
       }
   
       if(!isValidValue(problem ,0)) 
       return res.status(400).send({message:`${problem} is not a valid choice`})
   
       //  password  
       if (password.length < 8 || password.length > 15) {
           return res.status(400).send({ status: false, message: "password length should between 8 to 15" })
       }     
       data.password = await bcrypt.hash(password, 10)
   
       // converting time into minute
        sleepTime = convertMin(sleepTime)
        wakeTime = convertMin(wakeTime)
   
       //  converting sleep hour into minute
        sleepHours = Number(sleepHours.split(" ")[0]) *60
        
       // total bed time
        let diff = wakeTime - sleepTime
        if(diff<0) diff =1440+diff
   
       //  calculating Efficiency
        let eff = Math.ceil((sleepHours/diff)*100)
        if(eff>100) eff = 100
   
       //  adding updated field in data
        data["efficiency"] = eff
        data.sleepTime= sleepTime
        data.wakeTime= wakeTime
        data.sleepHours=sleepHours
        
       // storing data into database
       let save= await model.create(data)
        let msg= eff!=100?"We'll get this up to 80% ":"Thats great"
   
       res.status(201).send({message:`You seem to have sleep efficiency of ${eff}%  ${msg} 😎......A higher sleep efficiency score means a more refreshing and energizing sleep,which can help you move into your day with a sense of lightness and ease`})
    } 
    catch (error) {
       console.log(error.message)
       res.status(500).send({Error:error.message})
    }
   
   }

//    ```````````````````````````````````````````````````login`````````````````````````````````````````````````````
const loginUser = async (req, res)=> {
    try {
        const requestBody = req.body;

        //Destructuring
        let { nickName, password } = requestBody;


        for(let field in requestBody){
        
            if(!isValid(requestBody[`${field}`])){
                return res.status(400).send({message:` ${field} cannot be empty`})
            }
        }

        const check = await model.findOne({nickName:nickName})
        if(!check) return res.status(404).send({message:`user not exist`})
   
        //matching of encrypted Password
        const dbPassword = check.password
        
        const passwordMathched = await bcrypt.compare(password, dbPassword)
        if (!passwordMathched) {
            return res.status(401).send({ status: false, message: "Please provide valid credentils" })
        }

        //Ganeration of JWT Token

        const userId = check._id;
        
            const token = jwt.sign(
                {
                    userId: userId

                },
                "egyfgowgfwlj", { expiresIn: "24hr" }
            );
            res.status(200).send({ status: true, message: `welcome to good Sleep`, token: token  });
        
    } catch (err) {
        res.status(500).send({ status: false, data: err.message });
    }
};


   module.exports = {userData,loginUser}