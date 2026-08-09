window.MU={
 id:()=>crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(16).slice(2),
 today:()=>new Date().toISOString().slice(0,10),
 month:()=>new Date().toISOString().slice(0,7),
 money:n=>"₹"+Number(n||0).toLocaleString("en-IN"),
 date:d=>d?new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"—",
 esc:s=>String(s??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[x])),
 download:(name,text,type="application/json")=>{let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)},
 q:s=>document.querySelector(s)
};