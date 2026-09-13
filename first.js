const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];


const compliments = [
    "You have a naturally charming personality.",
    "Your confidence makes you stand out from the crowd.",
    "You have a creative mind and a unique way of thinking.",
    "Your kindness makes people feel comfortable around you.",
    "You have an amazing ability to inspire others.",
    "Your positive energy is truly contagious.",
    "You have a strong personality and a beautiful heart.",
    "Your intelligence is one of your most attractive qualities.",
    "You have a natural talent for making people smile.",
    "Your determination makes you capable of achieving great things.",
    "You have a calm and peaceful presence.",
    "Your sense of humor makes you unforgettable.",
    "You have a beautiful way of understanding people.",
    "Your confidence and kindness make a powerful combination.",
    "You have a naturally magnetic personality.",
    "Your creativity makes you different in the best way.",
    "You have a warm heart that people genuinely appreciate.",
    "Your courage helps you overcome challenges.",
    "You have an impressive ability to stay positive.",
    "Your personality becomes more attractive the more people know you.",
    "You have a sharp mind and a thoughtful nature.",
    "Your honesty makes people trust you easily.",
    "You bring a special energy wherever you go.",
    "Your ambition and dedication are truly admirable.",
    "You have a naturally elegant and graceful personality.",
    "Your smile has the power to brighten someone's day.",
    "You have a strong spirit and an unforgettable presence.",
    "Your ability to understand others is truly special.",
    "You have a rare combination of confidence and humility.",
    "Your positive mindset makes you incredibly inspiring.",
    "You are the kind of person people are lucky to have in their lives."
];

const victimCardCompliments = [
    "You deserve better than the way they treated you.",
    "Your heart stayed kind even after everything you went through.",
    "You are stronger than you give yourself credit for.",
    "You never deserved to be made to feel like the problem.",
    "Your ability to keep going is genuinely inspiring.",
    "You have survived things that would have broken many people.",
    "You care deeply, and that is a beautiful quality.",
    "You gave your best, and that says a lot about your character.",
    "You deserve people who appreciate you without taking you for granted.",
    "Your strength is hidden behind a very gentle heart.",
    "You didn't lose yourself—you discovered how strong you really are.",
    "You deserve peace after everything you've had to handle.",
    "Your kindness is not weakness; it is one of your greatest strengths.",
    "You have every reason to be proud of how far you've come.",
    "You stayed genuine even when others weren't.",
    "Your story doesn't define you—your strength does.",
    "You deserve to be heard, valued, and respected.",
    "You have a resilience that makes you truly special.",
    "The fact that you still believe in people shows how beautiful your heart is.",
    "Better days are ahead, and you deserve every one of them."
];

const recommendations = [
    "Trust your instincts, but give yourself time before making major decisions.",
    "Surround yourself with people who genuinely support your growth.",
    "Do not let temporary setbacks define your future.",
    "Take more time to appreciate your own achievements.",
    "Keep learning new skills and exploring your creativity.",
    "Be confident in expressing your ideas and opinions.",
    "Avoid comparing your journey with someone else's.",
    "Make time for the people who make you feel valued.",
    "Stay consistent with the goals that matter most to you.",
    "Do not be afraid to step outside your comfort zone.",
    "Protect your peace by setting healthy boundaries.",
    "Use your natural creativity to solve problems differently.",
    "Think carefully before making decisions based purely on emotions.",
    "Celebrate small victories along the way.",
    "Be patient with yourself when things do not go as planned.",
    "Focus your energy on things you can actually control.",
    "Take opportunities that help you grow as a person.",
    "Do not underestimate the value of honest communication.",
    "Make time for rest instead of constantly pushing yourself.",
    "Keep your long-term goals in sight when facing challenges.",
    "Learn from your mistakes instead of being too hard on yourself.",
    "Choose quality friendships over a large social circle.",
    "Stay curious and keep discovering new interests.",
    "Believe in your abilities even when others doubt you.",
    "Be open to advice, but make your own final decisions.",
    "Take care of your mental and emotional well-being.",
    "Use your strengths to help and encourage others.",
    "Do not rush important relationships or life decisions.",
    "Keep moving forward, even if progress feels slow.",
    "Remember that your future is shaped by your choices, not just your circumstances."
];


const predictions = [
    "A new opportunity may soon open a door you have been waiting for.",
    "Your hard work is likely to bring noticeable results in the near future.",
    "A positive change may appear in your personal life.",
    "You may soon meet someone who brings new energy into your life.",
    "A decision you have been thinking about could lead to an exciting new chapter.",
    "Your confidence is likely to grow as you overcome an upcoming challenge.",
    "An unexpected opportunity may help you move closer to your goals.",
    "The coming period may bring greater clarity about your future plans.",
    "A long-awaited message or conversation could bring good news.",
    "Your creativity may lead you toward an interesting opportunity.",
    "You may discover a hidden talent or ability that surprises you.",
    "A financial opportunity may appear if you remain patient and practical.",
    "Someone close to you may offer valuable support at the right moment.",
    "A difficult situation may soon begin moving in a more positive direction.",
    "Your persistence could turn a small opportunity into something meaningful.",
    "You may experience a memorable moment that changes your perspective.",
    "The next chapter of your life may bring personal growth and confidence.",
    "A fresh start may be closer than you think.",
    "Your positive attitude could attract new connections and opportunities.",
    "The future holds promising possibilities if you continue believing in yourself."
];



const form = document.querySelector("#astroform");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const text = `Hii ${name} ${surname}, Your Zoadic sign is ${zodiacSigns[month-1]}
        . ${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(day*month)%30]}.
        ${predictions[(name.length*surname.length)%20]}
    `

    document.getElementById("result").textContent = text;
   


})