
const cards = [
    { name: "The Fool", meaning: "New beginnings, spontaneity, a free spirit." },
    { name: "The Magician", meaning: "Power, skill, concentration, resourcefulness." },
    { name: "The High Priestess", meaning: "Intuition, unconscious knowledge, mystery." },
    { name: "The Empress", meaning: "Fertility, femininity, beauty, nature." },
    { name: "The Emperor", meaning: "Authority, structure, control, fatherhood." },
    { name: "The Hierophant", meaning: "Tradition, conformity, morality, guidance." },
    { name: "The Lovers", meaning: "Love, harmony, relationships, choices." },
    { name: "The Chariot", meaning: "Control, willpower, victory, assertion." },
    { name: "Strength", meaning: "Courage, patience, control, compassion." },
    { name: "The Hermit", meaning: "Introspection, solitude, guidance, soul searching." },
    { name: "Wheel of Fortune", meaning: "Luck, karma, life cycles, destiny." },
    { name: "Justice", meaning: "Fairness, truth, law, cause and effect." },
    { name: "The Hanged Man", meaning: "Sacrifice, release, martyrdom, letting go." },
    { name: "Death", meaning: "Endings, transformation, transition." },
    { name: "Temperance", meaning: "Balance, moderation, patience, purpose." },
    { name: "The Devil", meaning: "Addiction, materialism, playfulness." },
    { name: "The Tower", meaning: "Sudden upheaval, broken pride, disaster." },
    { name: "The Star", meaning: "Hope, faith, rejuvenation." },
    { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious." },
    { name: "The Sun", meaning: "Joy, success, celebration, positivity." },
    { name: "Judgement", meaning: "Reflection, reckoning, awakening." },
    { name: "The World", meaning: "Completion, integration, accomplishment, travel." }
];

function drawCards() {
    let selected = [];
    while (selected.length < 3) {
        let card = cards[Math.floor(Math.random() * cards.length)];
        if (!selected.includes(card)) selected.push(card);
    }
    document.querySelector("#past .result").textContent = selected[0].name + ": " + selected[0].meaning;
    document.querySelector("#present .result").textContent = selected[1].name + ": " + selected[1].meaning;
    document.querySelector("#future .result").textContent = selected[2].name + ": " + selected[2].meaning;
}
