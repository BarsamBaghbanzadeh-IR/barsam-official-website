// =====================================
// Barsam Baghbanzadeh Official Website
// JavaScript Ultimate Version 2
// Part 1
// =====================================



// ===============================
// WEBSITE ENTRY SYSTEM
// ===============================


function enterSite() {


    const welcome =
        document.getElementById("welcome");


    const website =
        document.getElementById("website");



    if (welcome) {


        welcome.style.opacity = "0";

        welcome.style.transform =
            "scale(1.2)";


        setTimeout(() => {


            welcome.style.display = "none";


        }, 800);


    }



    if (website) {


        website.style.display = "block";


    }



    showCountryMessage();


    increaseVisitors();


    createNotification(
        "🚀 Welcome to Barsam Official Website"
    );


}





// ===============================
// COUNTRY SYSTEM
// ===============================


function showCountryMessage() {



    const country =
        document.getElementById("country");



    if (!country)
        return;



    let value =
        country.value;



    if (value.includes("Iran")) {


        createNotification(
            "🇮🇷 شما با افتخار از ایران وارد شدید"
        );


    }



    else {


        createNotification(
            "🌍 Welcome to Barsam Website"
        );


    }



}





// ===============================
// NOTIFICATION SYSTEM
// ===============================



function createNotification(text) {



    let old =
        document.querySelector(".notification");



    if (old)
        old.remove();



    let box =
        document.createElement("div");



    box.className = "notification";


    box.innerHTML = text;



    document.body.appendChild(box);



    setTimeout(() => {


        box.remove();


    }, 4000);



}







// ===============================
// THEME SYSTEM
// ===============================



function changeTheme() {



    document.body.classList.toggle(
        "dark"
    );



    let mode =
        document.body.classList.contains("dark")
            ?
            "dark"
            :
            "light";



    localStorage.setItem(
        "barsamTheme",
        mode
    );



    createNotification(
        "🎨 Theme Changed"
    );



}




window.addEventListener(
    "load",
    () => {


        let saved =
            localStorage.getItem(
                "barsamTheme"
            );



        if (saved === "dark") {

            document.body.classList.add(
                "dark"
            );

        }


    }

);
// ===============================
// LANGUAGE SYSTEM
// ===============================



const translations = {


    fa: {


        welcome:
            "به سایت رسمی برسام باغبان زاده خوش آمدید",


        projects:
            "پروژه‌ها",


        articles:
            "مقالات"


    },



    en: {


        welcome:
            "Welcome to Barsam Baghbanzadeh Official Website",


        projects:
            "Projects",


        articles:
            "Articles"


    }



};





function changeLanguage(lang) {



    localStorage.setItem(
        "language",
        lang
    );



    if (lang === "en") {



        document.documentElement.dir = "ltr";


        createNotification(
            "🌎 English Mode Activated"
        );



    }


    else {


        document.documentElement.dir = "rtl";


        createNotification(
            "🇮🇷 حالت فارسی فعال شد"
        );



    }



}





// ===============================
// VISITOR SYSTEM
// ===============================


function increaseVisitors() {



    let visits =
        localStorage.getItem(
            "barsamVisits"
        );



    if (!visits)
        visits = 0;



    visits++;



    localStorage.setItem(
        "barsamVisits",
        visits
    );



    let element =
        document.getElementById(
            "visitorNumber"
        );



    if (element) {

        element.innerHTML = visits;

    }


}






// ===============================
// SMOOTH SECTION
// ===============================



function scrollToSection(id) {



    let section =
        document.getElementById(id);



    if (section) {


        section.scrollIntoView({

            behavior: "smooth"

        });


    }



}
// =====================================
// BARSAM BOT SYSTEM
// =====================================


function askBarsamBot() {


    let input =
        document.getElementById(
            "botInput"
        );



    let answer =
        document.getElementById(
            "botAnswer"
        );



    if (!input || !answer)
        return;



    let question =
        input.value.toLowerCase();



    let response =
        "من هنوز در حال یادگیری هستم 🤖";



    if (question.includes("hello")
        ||
        question.includes("سلام")) {


        response =
            "سلام! من Barsam Bot هستم. خوش آمدید 🚀";

    }



    else if (
        question.includes("ai")
        ||
        question.includes("هوش")) {


        response =
            "هوش مصنوعی یکی از مسیرهای اصلی فناوری آینده است 🤖";

    }



    else if (
        question.includes("python")
        ||
        question.includes("پایتون")) {


        response =
            "Python یکی از زبان‌های مهم برای ساخت AI و نرم‌افزار است 🐍";

    }



    else if (
        question.includes("barsam")) {


        response =
            "این سایت رسمی Barsam Baghbanzadeh است ⭐";

    }



    answer.innerHTML = response;


    input.value = "";


}







// ===============================
// AI BUTTONS
// ===============================



function showAIMessage() {



    createNotification(
        "🤖 AI Lab آماده توسعه است"
    );



}




function showDentalMessage() {



    createNotification(
        "🦷 آینده پزشکی با AI ساخته می‌شود"
    );



}
// =====================================
// ARTICLE SYSTEM
// =====================================



let articles = [];



function publishArticle() {



    let title =
        document.querySelector(
            "#article-manager input"
        );



    let text =
        document.querySelector(
            "#article-manager textarea"
        );



    if (!title || !text)
        return;



    if (
        title.value === ""
        ||
        text.value === ""

    ) {


        createNotification(
            "⚠️ لطفاً همه قسمت‌ها را پر کنید"
        );


        return;


    }



    let article = {


        title: title.value,


        text: text.value,


        date:
            new Date().toLocaleDateString()



    };



    articles.push(article);



    localStorage.setItem(
        "barsamArticles",
        JSON.stringify(articles)
    );



    createNotification(
        "📝 مقاله ذخیره شد"
    );



    title.value = "";

    text.value = "";



}





function loadArticles() {



    let saved =
        localStorage.getItem(
            "barsamArticles"
        );



    if (saved) {


        articles =
            JSON.parse(saved);


    }



}



loadArticles();






// ===============================
// SAVE NOTES
// ===============================



function saveNote(text) {



    localStorage.setItem(
        "barsamNote",
        text
    );



    createNotification(
        "💾 ذخیره شد"
    );



}
// =====================================
// CONTACT SYSTEM
// =====================================



function sendMessage() {



    let inputs =
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        );



    let empty = false;



    inputs.forEach(item => {


        if (item.value === "") {

            empty = true;

        }


    });




    if (empty) {


        createNotification(
            "⚠️ لطفاً فرم را کامل کنید"
        );


        return;


    }




    createNotification(
        "📩 پیام شما ثبت شد"
    );



    inputs.forEach(item => {


        item.value = "";


    });



}







// ===============================
// COMMENTS SYSTEM
// ===============================



function addComment() {



    let comment =
        document.querySelector(
            ".comment-box textarea"
        );



    if (!comment)
        return;



    if (comment.value === "")
        return;



    let box =
        document.createElement(
            "div"
        );



    box.className = "comment";


    box.innerHTML =
        "⭐ " + comment.value;



    document.querySelector(
        ".comment-list"
    )
        .appendChild(box);



    comment.value = "";



    createNotification(
        "💬 نظر اضافه شد"
    );



}







// ===============================
// CLOCK
// ===============================



function updateClock() {



    let now =
        new Date();



    let clock =
        document.getElementById(
            "clock"
        );



    if (clock) {


        clock.innerHTML =
            now.toLocaleTimeString();


    }



}



setInterval(
    updateClock,
    1000
);
// =====================================
// FINAL EFFECTS
// =====================================


// Scroll Reveal


const sections =
    document.querySelectorAll(
        "section"
    );



window.addEventListener(
    "scroll",
    () => {


        sections.forEach(section => {


            let position =
                section.getBoundingClientRect()
                    .top;



            if (position < window.innerHeight - 100) {


                section.classList.add(
                    "show"
                );



            }



        });


    });







// ===============================
// BUTTON RIPPLE EFFECT
// ===============================



document.querySelectorAll(
    "button"
)
    .forEach(button => {



        button.addEventListener(
            "click",
            function (e) {


                let ripple =
                    document.createElement(
                        "span"
                    );



                ripple.className =
                    "ripple";



                this.appendChild(
                    ripple
                );



                setTimeout(() => {


                    ripple.remove();


                }, 600);



            });


    });






// ===============================
// PAGE READY
// ===============================



window.addEventListener(
    "load",
    () => {


        createNotification(
            "✅ Barsam Website Loaded Successfully"
        );



    });







// ===============================
// SECURITY BASIC
// ===============================



document.addEventListener(
    "contextmenu",
    function (e) {


        e.preventDefault();


    });





console.log(
    "Barsam Ultimate Website System Activated 🚀"
);
// =====================================
// PUBLIC ARTICLE SYSTEM
// =====================================



function loadPublicArticles() {



    let container =
        document.getElementById(
            "publicArticleList"
        );



    if (!container)
        return;



    let articles =
        JSON.parse(

            localStorage.getItem(
                "barsamArticles"
            )

        )
        ||
        [];





    container.innerHTML = "";




    if (articles.length === 0) {


        container.innerHTML =
            `
<div class="article-card">

<h3>
هنوز مقاله‌ای منتشر نشده است
</h3>

</div>
`;

        return;


    }







    articles.forEach(article => {



        container.innerHTML += `

<div class="article-card">


<h3>
${article.title}
</h3>


<p>

${article.text}

</p>


<small>

${article.date}

</small>


</div>


`;



    });



}







// =====================================
// PUBLIC PROJECT SYSTEM
// =====================================



function loadPublicProjects() {



    let container =
        document.getElementById(
            "publicProjectList"
        );



    if (!container)
        return;




    let projects =
        JSON.parse(

            localStorage.getItem(
                "barsamProjects"
            )

        )
        ||
        [];





    container.innerHTML = "";





    if (projects.length === 0) {


        container.innerHTML =
            `

<div class="project-card">

<h3>
هنوز پروژه‌ای اضافه نشده است
</h3>

</div>

`;

        return;


    }





    projects.forEach(project => {



        container.innerHTML += `

<div class="project-card">


<div class="project-image">

🚀

</div>


<h3>

${project.name}

</h3>


<p>

${project.description}

</p>


</div>

`;



    });



}






// اجرای خودکار هنگام باز شدن سایت


window.addEventListener(
    "load",
    () => {


        loadPublicArticles();


        loadPublicProjects();


    });
// =====================================
// BARSAM AI CHAT SYSTEM
// VERSION 1
// =====================================



let chatHistory =
    JSON.parse(

        localStorage.getItem(
            "barsamChat"
        )

    )
    ||
    [];





function renderChat() {



    let box =
        document.getElementById(
            "chatMessages"
        );



    if (!box)
        return;



    box.innerHTML = "";




    chatHistory.forEach(message => {



        let div =
            document.createElement(
                "div"
            );



        if (message.role === "user") {


            div.className =
                "user-message";


        }

        else {


            div.className =
                "ai-message";


        }



        div.innerHTML =
            message.text;



        box.appendChild(div);



    });



    box.scrollTop =
        box.scrollHeight;



}







function sendAIMessage() {



    let input =
        document.getElementById(
            "userMessage"
        );



    let text =
        input.value.trim();




    if (text === "")
        return;





    addChatMessage(
        "user",
        text
    );



    input.value = "";





    showThinking();





    setTimeout(() => {


        let answer =
            generateBarsamAnswer(text);



        removeThinking();



        addChatMessage(
            "ai",
            answer
        );



    }, 1200);




}









function addChatMessage(
    role,
    text
) {



    chatHistory.push({


        role: role,


        text: text


    });





    localStorage.setItem(

        "barsamChat",

        JSON.stringify(chatHistory)

    );



    renderChat();



}









function generateBarsamAnswer(question) {



    let q =
        question.toLowerCase();




    if (
        q.includes("سلام")
        ||
        q.includes("hello")
    ) {


        return "سلام! من Barsam AI هستم. خوشحالم که اینجا هستید 🚀";


    }



    if (
        q.includes("ai")
        ||
        q.includes("هوش")
    ) {


        return "هوش مصنوعی یکی از مهم‌ترین فناوری‌های آینده است. می‌توانم درباره AI، برنامه‌نویسی و تکنولوژی کمک کنم 🤖";


    }



    if (
        q.includes("python")
        ||
        q.includes("پایتون")
    ) {


        return "پایتون یکی از بهترین زبان‌ها برای شروع برنامه‌نویسی و ساخت هوش مصنوعی است 🐍";


    }




    if (
        q.includes("barsam")
    ) {


        return "این سایت رسمی Barsam Baghbanzadeh است ⭐";


    }





    return "سؤال جالبی است. در نسخه کامل Barsam AI با اتصال به مدل هوش مصنوعی واقعی پاسخ دقیق‌تر ارائه می‌شود.";

}







function showThinking() {


    let box =
        document.getElementById(
            "chatMessages"
        );



    let div =
        document.createElement(
            "div"
        );



    div.id = "thinking";

    div.className = "ai-message";


    div.innerHTML =
        "🤖 در حال فکر کردن...";



    box.appendChild(div);



}






function removeThinking() {



    let item =
        document.getElementById(
            "thinking"
        );



    if (item)

        item.remove();



}






window.addEventListener(
    "load",
    renderChat
);