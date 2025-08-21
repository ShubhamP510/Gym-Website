//  AOS.init({
//             duration: 1000, // speed ms madhe
//             offset: 120,    // scroll zala ki trigger
//             once: true      // ekdach animation play hoyil
//         });
//         window.addEventListener("scroll", function () {
//             let navbar = document.querySelector("nav");
//             if (window.scrollY > 50) {
//                 navbar.style.background = "rgba(0,0,0,0.8)";
//             } else {
//                 navbar.style.background = "transparent";
//             }
//         });
       
//         function openModal(plan) {
//             document.getElementById("paymentModal").style.display = "flex";
//             document.getElementById("selectedPlan").innerText = "Selected Plan: " + plan;
//         }

//         function closeModal() {
//             document.getElementById("paymentModal").style.display = "none";
//         }

//         window.onclick = function (event) {
//             if (event.target == document.getElementById("paymentModal")) {
//                 closeModal();
//             }
//         }