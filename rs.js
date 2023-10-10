function agevalid()
 {
    let age=document.getElementById("input").value
    let result=document.getElementById("hello")
    if(age>18)
    {
        result.innerHTML="Eligible for Voting ✔"
    }
    else
    {
        result.innerHTML="Not Eligible for Voting ❌"
    }

}