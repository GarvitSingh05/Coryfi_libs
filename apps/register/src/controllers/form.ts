import db from "../libs/db"
export const signup = async (req: any, res: any) => {
    // console.log("Request received:", req.method, req.url);
    // console.log("Request headers:", req.headers);
    // console.log("Request body:", req.body);
    
    try {
      if (!req.body) {
        console.log("Request body is missing");
        return res.status(400).json({ error: "Request body is missing" });
      }
      
      const { name, email } = req.body;
      
      if (!name || !email) {
        console.log("Name or email is missing");
        return res.status(400).json({ error: "Name and email are required" });
      }
      
      console.log("Signup successful for:", name, email);
      const user=await db.user.create({ 
        data:{
            email,
            name
        }
      })
      res.json({
        name,
        email
      });
    } catch (error) {
      console.error("Error in signup:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };