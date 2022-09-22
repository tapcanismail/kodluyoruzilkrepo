

/*
 * bu sayfadaki örnek kodlar https://www.hackerrank.com/challenges/js10-loops/problem 
    sayfasındaki challenge için hazırlandı. bir rnegini de buraya bırakıyorum.
    
    ****kod parçasındaki amaç; "s" sabitine atanan dizinin içindeki harfleri önce ünlü 
        harfler arkasından ise ünsüz harfler gelecek şekilde sıralama yapmaktır.
 
 */

function vowelsAndConsonants(s) {
    let gelen
    let des =s.length
    let yenidizi=[]
    let yenidizi2=[]
    let tamhali=[]
    for (let i=0;i<des;i++)
    {
        if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u" )
            {
                gelen=s[i]
               
                yenidizi.push(gelen)
            }else{
                 gelen=s[i]
                
                yenidizi2.push(gelen)
            }
    }
    
    tamhali=yenidizi.concat(yenidizi2)
  for(let i=0;i<tamhali.length;i++)
    {
        console.log(tamhali[i])
    }
    
    
}



    
const s =["j","a","v","a","s","c","r","p","t","l","o","o","p","s"]
   
vowelsAndConsonants(s);
}
