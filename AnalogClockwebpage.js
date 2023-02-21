function time()
{
    let d= new Date();
    // let hrs= d.getHours();
    let hrs= (d.getHours()%12);
    let min=d.getMinutes();
    let sec=d.getSeconds();

    document.getElementById("hrs").value=hrs;
    document.getElementById("min").value=min;
    document.getElementById("sec").value=sec;

    // getting local time hh:min:sec from the local server using single command
    // document.getElementById("dt").innerHTML=d.toLocaleTimeString();

    // to display PM or AM
    if(d.getHours()>=12)
    {
        document.getElementById("meridian").value="PM";
    }
    else{
        document.getElementById("meridian").value="AM";
    }
}

setInterval(() => {time();},1000)
    
let d= new Date();
function time24()
{
  let hr= (d.getHours()%12);
  let min=d.getMinutes();
  let sec=d.getSeconds();
  console.log(hr);

}

time24();