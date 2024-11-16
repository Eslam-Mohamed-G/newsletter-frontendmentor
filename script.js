// document.getElementById("newsletterForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // منع إعادة تحميل الصفحة

//     const emailInput = document.getElementById("email");
//     const emailError = document.getElementById("email-error");
//     const emailValue = emailInput.value.trim();
//     const signupForm = document.getElementById("signupForm");
//     const successMessage = document.getElementById("successMessage");
//     const yourEmail = document.getElementById("yourEmail");

//     // التحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailValue)) {
//         emailError.textContent = "Please enter a valid email address.";
//         emailInput.style.backgroundColor = "#000"
//         return;
//     }

//     // إذا كان البريد الإلكتروني صحيحًا
//     emailError.textContent = ""; // إخفاء رسالة الخطأ
//     signupForm.classList.add("hidden"); // إخفاء نموذج الاشتراك
//     successMessage.classList.remove("hidden"); // عرض رسالة النجاح
//     yourEmail.textContent = emailValue; // عرض البريد الإلكتروني المدخل
// });

// // زر "Dismiss" لإخفاء رسالة النجاح
// document.getElementById("dismissButton").addEventListener("click", function () {
//     const emailInput = document.getElementById("email").value;
//     const successMessage = document.getElementById("successMessage");
//     const signupForm = document.getElementById("signupForm");

//     emailInput.textContent = " ";
//     successMessage.classList.add("hidden"); // إخفاء رسالة النجاح
//     signupForm.classList.remove("hidden"); // إعادة عرض نموذج الاشتراك
// });




// // التحقق عند النقر على زر "Subscribe"
// document.getElementById("submitButton").onclick = function () {
//     const emailInput = document.getElementById("email");
//     const emailError = document.getElementById("email-error");
//     const emailValue = emailInput.value.trim();
//     const signupForm = document.getElementById("signupForm");
//     const successMessage = document.getElementById("successMessage");
//     const yourEmail = document.getElementById("yourEmail");

//     // التحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailValue)) {
//         emailError.textContent = " Valid email required";
//         return;
//     }

//     // إذا كان البريد الإلكتروني صحيحًا
//     emailError.textContent = ""; // إخفاء رسالة الخطأ
//     signupForm.classList.add("hidden"); // إخفاء نموذج الاشتراك
//     successMessage.classList.remove("hidden"); // عرض رسالة النجاح
//     yourEmail.textContent = emailValue; // عرض البريد الإلكتروني المدخل
// };

// // زر "Dismiss" لإخفاء رسالة النجاح
// document.getElementById("dismissButton").onclick = function () {
//     const successMessage = document.getElementById("successMessage");
//     const signupForm = document.getElementById("signupForm");

//     successMessage.classList.add("hidden"); // إخفاء رسالة النجاح
//     signupForm.classList.remove("hidden"); // إعادة عرض نموذج الاشتراك
// };


var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
var signupForm = document.getElementById("signupForm");
var successMessage = document.getElementById("successMessage");
var yourEmail = document.getElementById("yourEmail")
emailInput.classList.remove("email-error")

function submitButton(){
    var email = emailInput.value;

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailError.textContent = "Valid email required";
        emailInput.classList.add("email-error")
        return;
    }else {
        emailError.textContent = "";
        emailInput.classList.remove("email-error");
        signupForm.classList.add("hidden")
        successMessage.classList.remove("hidden")
        yourEmail.textContent = email
        emailInput.textContent = "";
        return;
    }
}
// document.getElementById("email").addEventListener("input", submitButton);

document.getElementById("dismissButton").onclick = function (){
    emailInput.value = "";
    signupForm.classList.remove("hidden")
    successMessage.classList.add("hidden")
}

