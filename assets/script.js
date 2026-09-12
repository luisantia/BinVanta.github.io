const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
  });
}
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll("[data-plan]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const plan=document.getElementById("plan");
    if(plan) plan.value=btn.dataset.plan;
  });
});

document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("bookingForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent("BinVanta Service Request — "+data.get("plan"));
  const body=encodeURIComponent(
`New BinVanta service request

Name: ${data.get("name")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}
Address: ${data.get("address")}
Plan: ${data.get("plan")}
Number of bins: ${data.get("bins")}

Message:
${data.get("message") || "(none)"}`
  );
  const email="hello@binvanta.com";
  document.getElementById("formStatus").textContent="Opening your email app…";
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});
