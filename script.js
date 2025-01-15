<!DOCTYPE html>
 <html>
         <head>
              <title>Gravity Calculator</title>
         </head>
     <body>
         <h1>Force of Gravity</h1>
         <p>The result is:</p>
         <p id="result"></p>

         <script>
        
              let mass1 = 5.97e24; // 5.97 x 10^24 (Mass of Earth in kg)
              let mass2 = 7.35e22; // 7.35 x 10^22 (Mass of Moon in kg)
              let radius = 3.84e8; // 3.84 x 10^8 (Distance between Earth and Moon in meters)
              const G = 6.674e-11; // 6.674 x 10^-11 (Gravitational constant in N·m²/kg²)

        
             let force = (G * mass1 * mass2) / (radius * radius);

        
             document.getElementById("result").innerText = force + " N";
           </script>
      </body>
 </html>
   
	   
		
	   