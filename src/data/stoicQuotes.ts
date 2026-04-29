export interface StoicQuote {
  text: string;
  author: string;
  source?: string;
}

const curatedStoicQuotes: StoicQuote[] = [
  // --- CURATED STOIC QUOTES ---
  {
    text: "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius",
    source: "Meditations 2.11",
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    source: "Meditations 10.16",
  },
  {
    text: "The best way to avenge yourself is to not be like that.",
    author: "Marcus Aurelius",
    source: "Meditations 6.6",
  },
  {
    text: "Your soul takes on the color of your thoughts.",
    author: "Marcus Aurelius",
    source: "Meditations 5.16",
  },
  {
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
    source: "Meditations 5.20",
  },
  {
    text: "If it is not right, do not do it; if it is not true, do not say it.",
    author: "Marcus Aurelius",
    source: "Meditations 12.17",
  },
  {
    text: "The universe is change; our life is what our thoughts make it.",
    author: "Marcus Aurelius",
    source: "Meditations 4.3",
  },
  {
    text: "Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed—and you haven’t been.",
    author: "Marcus Aurelius",
    source: "Meditations 4.7",
  },
  {
    text: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
    author: "Marcus Aurelius",
    source: "Meditations 4.17",
  },
  {
    text: "Confine yourself to the present.",
    author: "Marcus Aurelius",
    source: "Meditations 7.29",
  },
  {
    text: "The art of living is more like wrestling than dancing.",
    author: "Marcus Aurelius",
    source: "Meditations 7.61",
  },
  {
    text: "Receive without pride, let go without attachment.",
    author: "Marcus Aurelius",
    source: "Meditations 8.33",
  },
  {
    text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    author: "Marcus Aurelius",
    source: "Meditations 7.59",
  },
  {
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius",
    source: "Meditations 7.47",
  },
  {
    text: "Because a thing is difficult for you, do not think it impossible for anyone to accomplish.",
    author: "Marcus Aurelius",
    source: "Meditations 6.19",
  },
  {
    text: "Loss is nothing else than change, and change is Nature's delight.",
    author: "Marcus Aurelius",
    source: "Meditations 9.35",
  },
  {
    text: "Everything is appropriate for me that is appropriate for you, O Universe.",
    author: "Marcus Aurelius",
    source: "Meditations 4.23",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: 'I have to go to work—as a human being.'",
    author: "Marcus Aurelius",
    source: "Meditations 5.1",
  },
  {
    text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
    author: "Marcus Aurelius",
    source: "Meditations 4.3",
  },
  {
    text: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius",
    source: "Meditations 6.39",
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
    author: "Marcus Aurelius",
    source: "Meditations 7.56",
  },
  {
    text: "Never let the future disturb you. You will meet it, if you must, with the same weapons of reason which today arm you against the present.",
    author: "Marcus Aurelius",
    source: "Meditations 7.8",
  },
  {
    text: "Be tolerant with others and strict with yourself.",
    author: "Marcus Aurelius",
    source: "Meditations 5.33",
  },
  {
    text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    author: "Marcus Aurelius",
    source: "Meditations 8.5",
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Moral Letters 13",
  },
  {
    text: "It is not that we have a short time to live, but that we waste much of it.",
    author: "Seneca",
    source: "On the Shortness of Life 1",
  },
  {
    text: "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca",
    source: "Moral Letters 101",
  },
  {
    text: "He suffers more than necessary, who suffers before it is necessary.",
    author: "Seneca",
    source: "Moral Letters 98",
  },
  {
    text: "If a man knows not to which port he sails, no wind is favorable.",
    author: "Seneca",
    source: "Moral Letters 71",
  },
  {
    text: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca",
    source: "Moral Letters 106",
  },
  {
    text: "Associate with people who are likely to improve you.",
    author: "Seneca",
    source: "Moral Letters 7",
  },
  {
    text: "While we wait for life, life passes.",
    author: "Seneca",
    source: "Moral Letters 1",
  },
  {
    text: "Life, if lived well, is long enough.",
    author: "Seneca",
    source: "On the Shortness of Life 2",
  },
  {
    text: "He is most powerful who has power over himself.",
    author: "Seneca",
    source: "Moral Letters 113",
  },
  {
    text: "Sometimes even to live is an act of courage.",
    author: "Seneca",
    source: "Moral Letters 78",
  },
  {
    text: "No man was ever wise by chance.",
    author: "Seneca",
    source: "Moral Letters 76",
  },
  {
    text: "True happiness is to enjoy the present, without anxious dependence upon the future.",
    author: "Seneca",
    source: "On Benefits 7.2",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
    source: "Moral Letters 2",
  },
  {
    text: "The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
    source: "On the Shortness of Life 9",
  },
  {
    text: "You act like mortals in all that you fear, and like immortals in all that you desire.",
    author: "Seneca",
    source: "On the Shortness of Life 3",
  },
  {
    text: "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
    source: "Moral Letters 77",
  },
  {
    text: "Fire is the test of gold; adversity, of strong men.",
    author: "Seneca",
    source: "On Providence 5.10",
  },
  {
    text: "It is because things are difficult that we do not dare.",
    author: "Seneca",
    source: "Moral Letters 104",
  },
  {
    text: "Leisure without study is death—a tomb for the living man.",
    author: "Seneca",
    source: "Moral Letters 82",
  },
  {
    text: "To be everywhere is to be nowhere.",
    author: "Seneca",
    source: "Moral Letters 2",
  },
  {
    text: "No man is free who is not master of himself.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
    source: "Discourses 3.23",
  },
  {
    text: "Don't explain your philosophy. Embody it.",
    author: "Epictetus",
    source: "Enchiridion 46",
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus",
    source: "Discourses 1.1",
  },
  {
    text: "Only the educated are free.",
    author: "Epictetus",
    source: "Discourses 2.1",
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid.",
    author: "Epictetus",
    source: "Enchiridion 13",
  },
  {
    text: "People are not disturbed by things, but by the views they take of them.",
    author: "Epictetus",
    source: "Enchiridion 5",
  },
  {
    text: "Nothing great is created suddenly, any more than a bunch of grapes or a fig.",
    author: "Epictetus",
    source: "Discourses 1.15",
  },
  {
    text: "Any person capable of angering you becomes your master.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus",
    source: "Fragments 129",
  },
  {
    text: "Circumstances don't make the man, they only reveal him to himself.",
    author: "Epictetus",
    source: "Discourses 1.24",
  },
  {
    text: "If you wish to be a writer, write.",
    author: "Epictetus",
    source: "Discourses 2.18",
  },
  {
    text: "It is impossible for a man to learn what he thinks he already knows.",
    author: "Epictetus",
    source: "Discourses 2.11",
  },
  {
    text: "Keep silence for the most part, and speak only when you must, and then briefly.",
    author: "Epictetus",
    source: "Enchiridion 33",
  },
  {
    text: "There is only one way to happiness: to cease worrying about things beyond our power.",
    author: "Epictetus",
    source: "Enchiridion 1",
  },
  {
    text: "If you accomplish something honorable with hard work, the labor passes, but the honor remains.",
    author: "Musonius Rufus",
    source: "Fragment 51",
  },
  {
    text: "We have two ears and one mouth that we may hear the more and speak the less.",
    author: "Zeno of Citium",
    source: "Fragments",
  },
  {
    text: "Steel your sensibilities, so that life shall hurt you as little as possible.",
    author: "Zeno of Citium",
    source: "Fragments",
  },
];

const expandedMeditationsQuotes: StoicQuote[] = [
  // --- MARCUS AURELIUS (Expanded Meditations Passages) ---
  {
    text: "From my grandfather Verus I learned good morals and the government of my temper.",
    author: "Marcus Aurelius",
    source: "Meditations 1.1",
  },
  {
    text: "From the reputation and remembrance of my father, modesty and a manly character.",
    author: "Marcus Aurelius",
    source: "Meditations 1.2",
  },
  {
    text: "From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.",
    author: "Marcus Aurelius",
    source: "Meditations 1.3",
  },
  {
    text: "From my great-grandfather, not to have frequented public schools, and to have had good teachers at home, and to know that on such things a man should spend liberally.",
    author: "Marcus Aurelius",
    source: "Meditations 1.4",
  },
  {
    text: "From Fronto I learned to observe what envy, and duplicity, and hypocrisy are in a tyrant, and that generally those among us who are called Patricians are rather deficient in paternal affection.",
    author: "Marcus Aurelius",
    source: "Meditations 1.11",
  },
  {
    text: "From Alexander the Platonic, not frequently nor without necessity to say to any one, or to write in a letter, that I have no leisure; nor continually to excuse the neglect of duties required by our relation to those with whom we live, by alleging urgent occupations.",
    author: "Marcus Aurelius",
    source: "Meditations 1.12",
  },
  {
    text: "From Catulus, not to be indifferent when a friend finds fault, even if he should find fault without reason, but to try to restore him to his usual disposition; and to be ready to speak well of teachers, as it is reported of Domitius and Athenodotus; and to love my children truly.",
    author: "Marcus Aurelius",
    source: "Meditations 1.13",
  },
  {
    text: "Do wrong to thyself, do wrong to thyself, my soul; but thou wilt no longer have the opportunity of honouring thyself. Every man's life is sufficient. But thine is nearly finished, though thy soul reveres not itself but places thy felicity in the souls of others.",
    author: "Marcus Aurelius",
    source: "Meditations 2.6",
  },
  {
    text: "Through not observing what is in the mind of another a man has seldom been seen to be unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.",
    author: "Marcus Aurelius",
    source: "Meditations 2.8",
  },
  {
    text: "This thou must always bear in mind, what is the nature of the whole, and what is my nature, and how this is related to that, and what kind of a part it is of what kind of a whole; and that there is no one who hinders thee from always doing and saying the things which are according to the nature of which thou art a part.",
    author: "Marcus Aurelius",
    source: "Meditations 2.9",
  },
  {
    text: "Remember that all is opinion. For what was said by the Cynic Monimus is manifest: and manifest too is the use of what was said, if a man receives what may be got out of it as far as it is true.",
    author: "Marcus Aurelius",
    source: "Meditations 2.15",
  },
  {
    text: "Revere the faculty which produces opinion. On this faculty it entirely depends whether there shall exist in thy ruling part any opinion inconsistent with nature and the constitution of the rational animal. And this faculty promises freedom from hasty judgement, and friendship towards men, and obedience to the gods.",
    author: "Marcus Aurelius",
    source: "Meditations 3.9",
  },
  {
    text: "They know not how many things are signified by the words stealing, sowing, buying, keeping quiet, seeing what ought to be done; for this is not effected by the eyes, but by another kind of vision.",
    author: "Marcus Aurelius",
    source: "Meditations 3.15",
  },
  {
    text: "Let no act be done without a purpose, nor otherwise than according to the perfect principles of art.",
    author: "Marcus Aurelius",
    source: "Meditations 4.2",
  },
  {
    text: "Death is such as generation is, a mystery of nature; a composition out of the same elements, and a decomposition into the same; and altogether not a thing of which any man should be ashamed, for it is not contrary to the nature of a reasonable animal, and not contrary to the reason of our constitution.",
    author: "Marcus Aurelius",
    source: "Meditations 4.5",
  },
  {
    text: "It is natural that these things should be done by such persons, it is a matter of necessity; and if a man will not have it so, he will not allow the fig-tree to have juice. But by all means bear this in mind, that within a very short time both thou and he will be dead; and soon not even your names will be left behind.",
    author: "Marcus Aurelius",
    source: "Meditations 4.6",
  },
  {
    text: "Take away thy opinion, and then there is taken away the complaint, \"I have been harmed.\" Take away the complaint, \"I have been harmed,\" and the harm is taken away.",
    author: "Marcus Aurelius",
    source: "Meditations 4.7",
  },
  {
    text: "That which does not make a man worse than he was, also does not make his life worse, nor does it harm him either from without or from within.",
    author: "Marcus Aurelius",
    source: "Meditations 4.8",
  },
  {
    text: "The nature of that which is universally useful has been compelled to do this.",
    author: "Marcus Aurelius",
    source: "Meditations 4.9",
  },
  {
    text: "Do not have such an opinion of things as he has who does thee wrong, or such as he wishes thee to have, but look at them as they are in truth.",
    author: "Marcus Aurelius",
    source: "Meditations 4.11",
  },
  {
    text: "Hast thou reason? \"I have.\" Why then dost not thou use it? For if this does its own work, what else dost thou wish?",
    author: "Marcus Aurelius",
    source: "Meditations 4.13",
  },
  {
    text: "Thou hast existed as a part. Thou shalt disappear in that which produced thee; but rather thou shalt be received back into its seminal principle by transmutation.",
    author: "Marcus Aurelius",
    source: "Meditations 4.14",
  },
  {
    text: "Many grains of frankincense on the same altar: one falls before, another falls after; but it makes no difference.",
    author: "Marcus Aurelius",
    source: "Meditations 4.15",
  },
  {
    text: "Within ten days thou wilt seem a god to those to whom thou art now a beast and an ape, if thou wilt return to thy principles and the worship of reason.",
    author: "Marcus Aurelius",
    source: "Meditations 4.16",
  },
  {
    text: "Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.",
    author: "Marcus Aurelius",
    source: "Meditations 4.17",
  },
  {
    text: "How much trouble he avoids who does not look to see what his neighbour says or does or thinks, but only to what he does himself, that it may be just and pure; or as Agathon says, look not round at the depraved morals of others, but run straight along the line without deviating from it.",
    author: "Marcus Aurelius",
    source: "Meditations 4.18",
  },
  {
    text: "Do not be whirled about, but in every movement have respect to justice, and on the occasion of every impression maintain the faculty of comprehension or understanding.",
    author: "Marcus Aurelius",
    source: "Meditations 4.22",
  },
  {
    text: "Try how the life of the good man suits thee, the life of him who is satisfied with his portion out of the whole, and satisfied with his own just acts and benevolent disposition.",
    author: "Marcus Aurelius",
    source: "Meditations 4.25",
  },
  {
    text: "Either it is a well-arranged universe or a chaos huddled together, but still a universe. But can a certain order subsist in thee, and disorder in the All? And this too when all things are so separated and diffused and sympathetic.",
    author: "Marcus Aurelius",
    source: "Meditations 4.27",
  },
  {
    text: "A black character, a womanish character, a stubborn character, bestial, childish, animal, stupid, counterfeit, scurrilous, fraudulent, tyrannical.",
    author: "Marcus Aurelius",
    source: "Meditations 4.28",
  },
  {
    text: "The one is a philosopher without a tunic, and the other without a book: here is another half naked: \"Bread I have not, he says, and I abide by reason.\" And I do not get the means of living out of my learning, and I abide by my reason.",
    author: "Marcus Aurelius",
    source: "Meditations 4.30",
  },
  {
    text: "Love the art, poor as it may be, which thou hast learned, and be content with it; and pass through the rest of life like one who has intrusted to the gods with his whole soul all that he has, making thyself neither the tyrant nor the slave of any man.",
    author: "Marcus Aurelius",
    source: "Meditations 4.31",
  },
  {
    text: "Willingly give thyself up to Clotho, one of the Fates, allowing her to spin thy thread into whatever things she pleases.",
    author: "Marcus Aurelius",
    source: "Meditations 4.34",
  },
  {
    text: "Everything is only for a day, both that which remembers and that which is remembered.",
    author: "Marcus Aurelius",
    source: "Meditations 4.35",
  },
  {
    text: "Thou wilt soon die, and thou art not yet simple, not free from perturbations, nor without suspicion of being hurt by external things, nor kindly disposed towards all; nor dost thou yet place wisdom only in acting justly.",
    author: "Marcus Aurelius",
    source: "Meditations 4.37",
  },
  {
    text: "Examine men's ruling principles, even those of the wise, what kind of things they avoid, and what kind they pursue.",
    author: "Marcus Aurelius",
    source: "Meditations 4.38",
  },
  {
    text: "Thou art a little soul bearing about a corpse, as Epictetus used to say.",
    author: "Marcus Aurelius",
    source: "Meditations 4.41",
  },
  {
    text: "It is no evil for things to undergo change, and no good for things to subsist in consequence of change.",
    author: "Marcus Aurelius",
    source: "Meditations 4.42",
  },
  {
    text: "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place, and this will be carried away too.",
    author: "Marcus Aurelius",
    source: "Meditations 4.43",
  },
  {
    text: "Everything which happens is as familiar and well known as the rose in spring and the fruit in summer; for such is disease, and death, and calumny, and treachery, and whatever else delights fools or vexes them.",
    author: "Marcus Aurelius",
    source: "Meditations 4.44",
  },
  {
    text: "How easy it is to repel and to wipe away every impression which is troublesome or unsuitable, and immediately to be in all tranquility.",
    author: "Marcus Aurelius",
    source: "Meditations 5.2",
  },
  {
    text: "A prayer of the Athenians: > Rain, rain, O dear Zeus, > > down on the ploughed > > fields of the Athenians and on the plains. In truth we ought not to pray at all, or we ought to pray in this simple and noble fashion.",
    author: "Marcus Aurelius",
    source: "Meditations 5.7",
  },
  {
    text: "About what am I now employing my own soul? On every occasion I must ask myself this question, and inquire, what have I now in this part of me which they call the ruling principle? And whose soul have I now? That of a child, or of a young man, or of a feeble woman, or of a tyrant, or of a domestic animal, or of a wild beast?",
    author: "Marcus Aurelius",
    source: "Meditations 5.10",
  },
  {
    text: "To seek what is impossible is madness: and it is impossible that the bad should not do something of this kind.",
    author: "Marcus Aurelius",
    source: "Meditations 5.16",
  },
  {
    text: "Nothing happens to any man which he is not formed by nature to bear. The same things happen to another, and either because he does not see that they have happened or because he would show a great spirit he is firm and remains unharmed. It is a shame then that ignorance and conceit should be stronger than wisdom.",
    author: "Marcus Aurelius",
    source: "Meditations 5.17",
  },
  {
    text: "Things themselves touch not the soul, not in the least degree; nor have they admission to the soul, nor can they turn or move the soul: but the soul turns and moves itself alone, and whatever judgements it may think proper to make, such it makes for itself the things which present themselves to it.",
    author: "Marcus Aurelius",
    source: "Meditations 5.18",
  },
  {
    text: "Revere that which is best in the universe; and this is that which makes use of all things and directs all things. And in like manner also revere that which is best in thyself; and this is of the same kind as that. For in thyself also, that which makes use of everything else, is this, and thy life is directed by this.",
    author: "Marcus Aurelius",
    source: "Meditations 5.20",
  },
  {
    text: "That which does no harm to the state, does no harm to the citizen. In the case of every appearance of harm apply this rule: if the state is not harmed by this, neither am I harmed. But if the state is harmed, thou must not be angry with him who does harm to the state. Show him where his error is.",
    author: "Marcus Aurelius",
    source: "Meditations 5.21",
  },
  {
    text: "Think of the universal substance, of which thou hast a very small portion; and of universal time, of which a short and indivisible interval has been assigned to thee; and of that which is fixed by destiny, and how small a part of it thou art.",
    author: "Marcus Aurelius",
    source: "Meditations 5.23",
  },
  {
    text: "Does another do me wrong? Let him look to it. He has his own disposition, his own activity. I now have what the universal nature wills me to have; and I do what my nature now wills me to do.",
    author: "Marcus Aurelius",
    source: "Meditations 5.24",
  },
  {
    text: "\"Live with the gods\". And he does live with the gods who constantly shows to them, his own soul is satisfied with that which is assigned to him, and that it does all that the daemon wishes, which Zeus hath given to every man for his guardian and guide, a portion of himself. And this is every man's understanding and reason.",
    author: "Marcus Aurelius",
    source: "Meditations 5.26",
  },
  {
    text: "Why do unskilled and ignorant souls disturb him who has skill and knowledge? What soul then has skill and knowledge? That which knows beginning and end, and knows the reason which pervades all substance and through all time by fixed periods (revolutions) administers the universe.",
    author: "Marcus Aurelius",
    source: "Meditations 5.31",
  },
  {
    text: "If this is neither my own badness, nor an effect of my own badness, and the common weal is not injured, why am I troubled about it? And what is the harm to the common weal?",
    author: "Marcus Aurelius",
    source: "Meditations 5.34",
  },
  {
    text: "The substance of the universe is obedient and compliant; and the reason which governs it has in itself no cause for doing evil, for it has no malice, nor does it do evil to anything, nor is anything harmed by it. But all things are made and perfected according to this reason.",
    author: "Marcus Aurelius",
    source: "Meditations 6.1",
  },
  {
    text: "Look within. Let neither the peculiar quality of anything nor its value escape thee.",
    author: "Marcus Aurelius",
    source: "Meditations 6.3",
  },
  {
    text: "All existing things soon change, and they will either be reduced to vapour, if indeed all substance is one, or they will be dispersed.",
    author: "Marcus Aurelius",
    source: "Meditations 6.4",
  },
  {
    text: "The reason which governs knows what its own disposition is, and what it does, and on what material it works.",
    author: "Marcus Aurelius",
    source: "Meditations 6.5",
  },
  {
    text: "The best way of avenging thyself is not to become like the wrong doer.",
    author: "Marcus Aurelius",
    source: "Meditations 6.6",
  },
  {
    text: "Take pleasure in one thing and rest in it, in passing from one social act to another social act, thinking of God.",
    author: "Marcus Aurelius",
    source: "Meditations 6.7",
  },
  {
    text: "The ruling principle is that which rouses and turns itself, and while it makes itself such as it is and such as it wills to be, it also makes everything which happens appear to itself to be such as it wills.",
    author: "Marcus Aurelius",
    source: "Meditations 6.8",
  },
  {
    text: "In conformity to the nature of the universe every single thing is accomplished, for certainly it is not in conformity to any other nature that each thing is accomplished, either a nature which externally comprehends this, or a nature which is comprehended within this nature, or a nature external and independent of this.",
    author: "Marcus Aurelius",
    source: "Meditations 6.9",
  },
  {
    text: "When thou hast been compelled by circumstances to be disturbed in a manner, quickly return to thyself and do not continue out of tune longer than the compulsion lasts; for thou wilt have more mastery over the harmony by continually recurring to it.",
    author: "Marcus Aurelius",
    source: "Meditations 6.11",
  },
  {
    text: "Above, below, all around are the movements of the elements. But the motion of virtue is in none of these: it is something more divine, and advancing by a way hardly observed it goes happily on its road.",
    author: "Marcus Aurelius",
    source: "Meditations 6.17",
  },
  {
    text: "If a thing is difficult to be accomplished by thyself, do not think that it is impossible for man: but if anything is possible for man and conformable to his nature, think that this can be attained by thyself too.",
    author: "Marcus Aurelius",
    source: "Meditations 6.19",
  },
  {
    text: "If any man is able to convince me and show me that I do not think or act right, I will gladly change; for I seek the truth by which no man was ever injured. But he is injured who abides in his error and ignorance.",
    author: "Marcus Aurelius",
    source: "Meditations 6.21",
  },
  {
    text: "I do my duty: other things trouble me not; for they are either things without life, or things without reason, or things that have rambled and know not the way.",
    author: "Marcus Aurelius",
    source: "Meditations 6.22",
  },
  {
    text: "Alexander the Macedonian and his groom by death were brought to the same state; for either they were received among the same seminal principles of the universe, or they were alike dispersed among the atoms.",
    author: "Marcus Aurelius",
    source: "Meditations 6.24",
  },
  {
    text: "Consider how many things in the same indivisible time take place in each of us, things which concern the body and things which concern the soul: and so thou wilt not wonder if many more things, or rather all things which come into existence in that which is the one and all, which we call Cosmos, exist in it at the same time.",
    author: "Marcus Aurelius",
    source: "Meditations 6.25",
  },
  {
    text: "Death is a cessation of the impressions through the senses, and of the pulling of the strings which move the appetites, and of the discursive movements of the thoughts, and of the service to the flesh.",
    author: "Marcus Aurelius",
    source: "Meditations 6.28",
  },
  {
    text: "It is a shame for the soul to be first to give way in this life, when thy body does not give way.",
    author: "Marcus Aurelius",
    source: "Meditations 6.29",
  },
  {
    text: "Return to thy sober senses and call thyself back; and when thou hast roused thyself from sleep and hast perceived that they were only dreams which troubled thee, now in thy waking hours look at these (the things about thee) as thou didst look at those (the dreams).",
    author: "Marcus Aurelius",
    source: "Meditations 6.31",
  },
  {
    text: "Neither the labour which the hand does nor that of the foot is contrary to nature, so long as the foot does the foot's work and the hand the hand's. So then neither to a man as a man is his labour contrary to nature, so long as it does the things of a man. But if the labour is not contrary to his nature, neither is it an evil to him.",
    author: "Marcus Aurelius",
    source: "Meditations 6.33",
  },
  {
    text: "How many pleasures have been enjoyed by robbers, patricides, tyrants.",
    author: "Marcus Aurelius",
    source: "Meditations 6.34",
  },
  {
    text: "He who has seen present things has seen all, both everything which has taken place from all eternity and everything which will be for time without end; for all things are of one kin and of one form.",
    author: "Marcus Aurelius",
    source: "Meditations 6.37",
  },
  {
    text: "Adapt thyself to the things with which thy lot has been cast: and the men among whom thou hast received thy portion, love them, but do it truly, sincerely.",
    author: "Marcus Aurelius",
    source: "Meditations 6.39",
  },
  {
    text: "Does the sun undertake to do the work of the rain, or Aesculapius the work of the Fruit-bearer (the earth)? And how is it with respect to each of the stars, are they not different and yet they work together to the same end?",
    author: "Marcus Aurelius",
    source: "Meditations 6.43",
  },
  {
    text: "As it happens to thee in the amphitheatre and such places, that the continual sight of the same things and the uniformity make the spectacle wearisome, so it is in the whole of life; for all things above, below, are the same and from the same. How long then?",
    author: "Marcus Aurelius",
    source: "Meditations 6.46",
  },
  {
    text: "Thou art not dissatisfied, I suppose, because thou weighest only so many litrae and not three hundred. Be not dissatisfied then that thou must live only so many years and not more; for as thou art satisfied with the amount of substance which has been assigned to thee, so be content with the time.",
    author: "Marcus Aurelius",
    source: "Meditations 6.49",
  },
  {
    text: "He who loves fame considers another man's activity to be his own good; and he who loves pleasure, his own sensations; but he who has understanding, considers his own acts to be his own good.",
    author: "Marcus Aurelius",
    source: "Meditations 6.51",
  },
  {
    text: "It is in our power to have no opinion about a thing, and not to be disturbed in our soul; for things themselves have no natural power to form our judgements.",
    author: "Marcus Aurelius",
    source: "Meditations 6.52",
  },
  {
    text: "Accustom thyself to attend carefully to what is said by another, and as much as it is possible, be in the speaker's mind.",
    author: "Marcus Aurelius",
    source: "Meditations 6.53",
  },
  {
    text: "That which is not good for the swarm, neither is it good for the bee.",
    author: "Marcus Aurelius",
    source: "Meditations 6.54",
  },
  {
    text: "If sailors abused the helmsman or the sick the doctor, would they listen to anybody else; or how could the helmsman secure the safety of those in the ship or the doctor the health of those whom he attends?",
    author: "Marcus Aurelius",
    source: "Meditations 6.55",
  },
  {
    text: "How many together with whom I came into the world are already gone out of it.",
    author: "Marcus Aurelius",
    source: "Meditations 6.56",
  },
  {
    text: "To the jaundiced honey tastes bitter, and to those bitten by mad dogs water causes fear; and to little children the ball is a fine thing. Why then am I angry? Dost thou think that a false opinion has less power than the bile in the jaundiced or the poison in him who is bitten by a mad dog?",
    author: "Marcus Aurelius",
    source: "Meditations 6.57",
  },
  {
    text: "No man will hinder thee from living according to the reason of thy own nature: nothing will happen to thee contrary to the reason of the universal nature.",
    author: "Marcus Aurelius",
    source: "Meditations 6.58",
  },
  {
    text: "In discourse thou must attend to what is said, and in every movement thou must observe what is doing. And in the one thou shouldst see immediately to what end it refers, but in the other watch carefully what is the thing signified.",
    author: "Marcus Aurelius",
    source: "Meditations 7.4",
  },
  {
    text: "How many after being celebrated by fame have been given up to oblivion; and how many who have celebrated the fame of others have long been dead.",
    author: "Marcus Aurelius",
    source: "Meditations 7.6",
  },
  {
    text: "Be not ashamed to be helped; for it is thy business to do thy duty like a soldier in the assault on a town. How then, if being lame thou canst not mount up on the battlements alone, but with the help of another it is possible?",
    author: "Marcus Aurelius",
    source: "Meditations 7.7",
  },
  {
    text: "Let not future things disturb thee, for thou wilt come to them, if it shall be necessary, having with thee the same reason which now thou usest for present things.",
    author: "Marcus Aurelius",
    source: "Meditations 7.8",
  },
  {
    text: "Everything material soon disappears in the substance of the whole; and everything formal (causal) is very soon taken back into the universal reason; and the memory of everything is very soon overwhelmed in time.",
    author: "Marcus Aurelius",
    source: "Meditations 7.10",
  },
  {
    text: "To the rational animal the same act is according to nature and according to reason.",
    author: "Marcus Aurelius",
    source: "Meditations 7.11",
  },
  {
    text: "Let there fall externally what will on the parts which can feel the effects of this fall. For those parts which have felt will complain, if they choose. But I, unless I think that what has happened is an evil, am not injured. And it is in my power not to think so.",
    author: "Marcus Aurelius",
    source: "Meditations 7.14",
  },
  {
    text: "Whatever any one does or says, I must be good, just as if the gold, or the emerald, or the purple were always saying this, Whatever any one does or says, I must be emerald and keep my colour.",
    author: "Marcus Aurelius",
    source: "Meditations 7.15",
  },
  {
    text: "Eudaemonia (happiness) is a good daemon, or a good thing. What then art thou doing here, O imagination? Go away, I entreat thee by the gods, as thou didst come, for I want thee not. But thou art come according to thy old fashion. I am not angry with thee: only go away.",
    author: "Marcus Aurelius",
    source: "Meditations 7.17",
  },
  {
    text: "One thing only troubles me, lest I should do something which the constitution of man does not allow, or in the way which it does not allow, or what it does not allow now.",
    author: "Marcus Aurelius",
    source: "Meditations 7.20",
  },
  {
    text: "Near is thy forgetfulness of all things; and near the forgetfulness of thee by all.",
    author: "Marcus Aurelius",
    source: "Meditations 7.21",
  },
  {
    text: "Nature which governs the whole will soon change all things which thou seest, and out of their substance will make other things, and again other things from the substance of them, in order that the world may be ever new.",
    author: "Marcus Aurelius",
    source: "Meditations 7.25",
  },
  {
    text: "Retire into thyself. The rational principle which rules has this nature, that it is content with itself when it does what is just, and so secures tranquility.",
    author: "Marcus Aurelius",
    source: "Meditations 7.28",
  },
  {
    text: "Wipe out the imagination. Stop the pulling of the strings. Confine thyself to the present. Understand well what happens either to thee or to another. Divide and distribute every object into the causal (formal) and the material. Think of thy last hour. Let the wrong which is done by a man stay there where the wrong was done.",
    author: "Marcus Aurelius",
    source: "Meditations 7.29",
  },
  {
    text: "Direct thy attention to what is said. Let thy understanding enter into the things that are doing and the things which do them.",
    author: "Marcus Aurelius",
    source: "Meditations 7.30",
  },
  {
    text: "Adorn thyself with simplicity and modesty and with indifference towards the things which lie between virtue and vice. Love mankind. Follow God. The poet says that \"Law rules all.\" And it is enough to remember that Law rules all.",
    author: "Marcus Aurelius",
    source: "Meditations 7.31",
  },
  {
    text: "About death: Whether it is a dispersion, or a resolution into atoms, or annihilation, it is either extinction or change.",
    author: "Marcus Aurelius",
    source: "Meditations 7.32",
  },
  {
    text: "About pain: The pain which is intolerable carries us off; but that which lasts a long time is tolerable; and the mind maintains its own tranquility by retiring into itself, and the directing mind is not made worse. But the parts which are harmed by pain, let them, if they can, give their opinion about it.",
    author: "Marcus Aurelius",
    source: "Meditations 7.33",
  },
  {
    text: "About fame: Look at the minds of those who seek fame, observe what they are, and what kind of things they avoid, and what kind of things they pursue. And consider that as the heaps of sand piled on one another hide the former sands, so in life the events which go before are soon covered by those which come after.",
    author: "Marcus Aurelius",
    source: "Meditations 7.34",
  },
  {
    text: "From Plato: The man who has an elevated mind and takes a view of all time and of all substance, dost thou suppose it possible for him to think that human life is anything great? \"It is not possible\", he said. Such a man then will think that death also is no evil. \"Certainly not\".",
    author: "Marcus Aurelius",
    source: "Meditations 7.35",
  },
  {
    text: "From Antisthenes: It is a King's lot to do good and to be damned for it.",
    author: "Marcus Aurelius",
    source: "Meditations 7.36",
  },
  {
    text: "It is a base thing for the countenance to be obedient and to regulate and compose itself as the mind commands, and for the mind not to be regulated and composed by itself.",
    author: "Marcus Aurelius",
    source: "Meditations 7.37",
  },
  {
    text: "It is not right to vex ourselves at things, For they care nought about it.",
    author: "Marcus Aurelius",
    source: "Meditations 7.38",
  },
  {
    text: "Life must be reaped like the ripe ears of corn: One man is born; another dies.",
    author: "Marcus Aurelius",
    source: "Meditations 7.40",
  },
  {
    text: "If gods care not for me and for my children, There is a reason for it.",
    author: "Marcus Aurelius",
    source: "Meditations 7.41",
  },
  {
    text: "No joining others in their wailing, nor violent emotion.",
    author: "Marcus Aurelius",
    source: "Meditations 7.43",
  },
  {
    text: "For thus it is, men of Athens, in truth: wherever a man has placed himself thinking it the best place for him, or has been placed by a commander, there in my opinion he ought to stay and to abide the hazard, taking nothing into the reckoning, either death or anything else, before the baseness of deserting his post.",
    author: "Marcus Aurelius",
    source: "Meditations 7.45",
  },
  {
    text: "Look round at the courses of the stars, as if thou wert going along with them; and constantly consider the changes of the elements into one another; for such thoughts purge away the filth of the terrene life.",
    author: "Marcus Aurelius",
    source: "Meditations 7.47",
  },
  {
    text: "That which has grown from the earth to the earth, But that which has sprung from heavenly seed, Back to the heavenly realms returns. This is either a dissolution of the mutual involution of the atoms, or a similar dispersion of the unsentient elements.",
    author: "Marcus Aurelius",
    source: "Meditations 7.50",
  },
  {
    text: "With food and drinks and cunning magic arts Turning the channel's course to 'scape from death. The breeze which heaven has sent We must endure, and toil without complaining.",
    author: "Marcus Aurelius",
    source: "Meditations 7.51",
  },
  {
    text: "Another may be more expert in casting his opponent; but he is not more social, nor more modest, nor better disciplined to meet all that happens, nor more considerate with respect to the faults of his neighbours.",
    author: "Marcus Aurelius",
    source: "Meditations 7.52",
  },
  {
    text: "Where any work can be done conformably to the reason which is common to gods and men, there we have nothing to fear: for where we are able to get profit by means of the activity which is successful and proceeds according to our constitution, there no harm is to be suspected.",
    author: "Marcus Aurelius",
    source: "Meditations 7.53",
  },
  {
    text: "Everywhere and at all times it is in thy power piously to acquiesce in thy present condition, and to behave justly to those who are about thee, and to exert thy skill upon thy present thoughts, that nothing shall steal into them without being well examined.",
    author: "Marcus Aurelius",
    source: "Meditations 7.54",
  },
  {
    text: "Consider thyself to be dead, and to have completed thy life up to the present time; and live according to nature the remainder which is allowed thee.",
    author: "Marcus Aurelius",
    source: "Meditations 7.56",
  },
  {
    text: "Love only that which happens to thee and is spun with the thread of thy destiny. For what is more suitable?",
    author: "Marcus Aurelius",
    source: "Meditations 7.57",
  },
  {
    text: "The body ought to be compact, and to show no irregularity either in motion or attitude. For what the mind shows in the face by maintaining in it the expression of intelligence and propriety, that ought to be required also in the whole body. But all of these things should be observed without affectation.",
    author: "Marcus Aurelius",
    source: "Meditations 7.60",
  },
  {
    text: "The art of life is more like the wrestler's art than the dancer's, in respect of this, that it should stand ready and firm to meet onsets which are sudden and unexpected.",
    author: "Marcus Aurelius",
    source: "Meditations 7.61",
  },
  {
    text: "Constantly observe who those are whose approbation thou wishest to have, and what ruling principles they possess. For then thou wilt neither blame those who offend involuntarily, nor wilt thou want their approbation, if thou lookest to the sources of their opinions and appetites.",
    author: "Marcus Aurelius",
    source: "Meditations 7.62",
  },
  {
    text: "Every soul, the philosopher says, is involuntarily deprived of truth; consequently in the same way it is deprived of justice and temperance and benevolence and everything of the kind. It is most necessary to bear this constantly in mind, for thus thou wilt be more gentle towards all.",
    author: "Marcus Aurelius",
    source: "Meditations 7.63",
  },
  {
    text: "Take care not to feel towards the inhuman, as they feel towards men.",
    author: "Marcus Aurelius",
    source: "Meditations 7.65",
  },
  {
    text: "The perfection of moral character consists in this, in passing every day as the last, and in being neither violently excited nor torpid nor playing the hypocrite.",
    author: "Marcus Aurelius",
    source: "Meditations 7.69",
  },
  {
    text: "The gods who are immortal are not vexed because during so long a time they must tolerate continually men such as they are and so many of them bad; and besides this, they also take care of them in all ways. But thou, who art destined to end so soon, art thou wearied of enduring the bad, and this too when thou art one of them?",
    author: "Marcus Aurelius",
    source: "Meditations 7.70",
  },
  {
    text: "It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men's badness, which is impossible.",
    author: "Marcus Aurelius",
    source: "Meditations 7.71",
  },
  {
    text: "Whatever the rational and political (social) faculty finds to be neither intelligent nor social, it properly judges to be inferior to itself.",
    author: "Marcus Aurelius",
    source: "Meditations 7.72",
  },
  {
    text: "When thou hast done a good act and another has received it, why dost thou look for a third thing besides these, as fools do, either to have the reputation of having done a good act or to obtain a return?",
    author: "Marcus Aurelius",
    source: "Meditations 7.73",
  },
  {
    text: "No man is tired of receiving what is useful. But it is useful to act according to nature. Do not then be tired of receiving what is useful by doing it to others.",
    author: "Marcus Aurelius",
    source: "Meditations 7.74",
  },
  {
    text: "On the occasion of every act ask thyself, How is this with respect to me? Shall I repent of it? A little time and I am dead, and all is gone. What more do I seek, if what I am now doing is work of an intelligent living being, and a social being, and one who is under the same law with God?",
    author: "Marcus Aurelius",
    source: "Meditations 8.2",
  },
  {
    text: "Consider that men will do the same things nevertheless, even though thou shouldst burst.",
    author: "Marcus Aurelius",
    source: "Meditations 8.4",
  },
  {
    text: "The nature of the universal has this work to do, to remove to that place the things which are in this, to change them, to take them away hence, and to carry them there. All things are change, yet we need not fear anything new. All things are familiar to us; but the distribution of them still remains the same.",
    author: "Marcus Aurelius",
    source: "Meditations 8.6",
  },
  {
    text: "Thou hast not leisure or ability to read. But thou hast leisure or ability to check arrogance: thou hast leisure to be superior to pleasure and pain: thou hast leisure to be superior to love of fame, and not to be vexed at stupid and ungrateful people, nay even to care for them.",
    author: "Marcus Aurelius",
    source: "Meditations 8.8",
  },
  {
    text: "Let no man any longer hear thee finding fault with the court life or with thy own.",
    author: "Marcus Aurelius",
    source: "Meditations 8.9",
  },
  {
    text: "Repentance is a kind of self-reproof for having neglected something useful; but that which is good must be something useful, and the perfect good man should look after it. But no such man would ever repent of having refused any sensual pleasure. Pleasure then is neither good nor useful.",
    author: "Marcus Aurelius",
    source: "Meditations 8.10",
  },
  {
    text: "This thing, what is it in itself, in its own constitution? What is its substance and material? And what its causal nature (or form)? And what is it doing in the world? And how long does it subsist?",
    author: "Marcus Aurelius",
    source: "Meditations 8.11",
  },
  {
    text: "Constantly and, if it be possible, on the occasion of every impression on the soul, apply to it the principles of Physic, of Ethic, and of Dialectic.",
    author: "Marcus Aurelius",
    source: "Meditations 8.13",
  },
  {
    text: "Remember that as it is a shame to be surprised if the fig-tree produces figs, so it is to be surprised if the world produces such and such things of which it is productive; and for the physician and the helmsman it is a shame to be surprised, if a man has a fever, or if the wind is unfavourable.",
    author: "Marcus Aurelius",
    source: "Meditations 8.15",
  },
  {
    text: "Remember that to change thy opinion and to follow him who corrects thy error is as consistent with freedom as it is to persist in thy error. For it is thy own, the activity which is exerted according to thy own movement and judgement, and indeed according to thy own understanding too.",
    author: "Marcus Aurelius",
    source: "Meditations 8.16",
  },
  {
    text: "That which has died falls not out of the universe. If it stays here, it also changes here, and is dissolved into its proper parts, which are elements of the universe and of thyself. And these too change, and they murmur not.",
    author: "Marcus Aurelius",
    source: "Meditations 8.18",
  },
  {
    text: "Everything exists for some end, a horse, a vine. Why dost thou wonder? Even the sun will say, I am for some purpose, and the rest of the gods will say the same. For what purpose then art thou? to enjoy pleasure? See if common sense allows this.",
    author: "Marcus Aurelius",
    source: "Meditations 8.19",
  },
  {
    text: "Attend to the matter which is before thee, whether it is an opinion or an act or a word. Thou sufferest this justly: for thou choosest rather to become good to-morrow than to be good to-day.",
    author: "Marcus Aurelius",
    source: "Meditations 8.22",
  },
  {
    text: "Am I doing anything? I do it with reference to the good of mankind. Does anything happen to me? I receive it and refer it to the gods, and the source of all things, from which all that happens is derived.",
    author: "Marcus Aurelius",
    source: "Meditations 8.23",
  },
  {
    text: "Such as bathing appears to thee- oil, sweat, dirt, filthy water, all things disgusting- so is every part of life and everything.",
    author: "Marcus Aurelius",
    source: "Meditations 8.24",
  },
  {
    text: "It is satisfaction to a man to do the proper works of a man. Now it is a proper work of a man to be benevolent to his own kind, to despise the movements of the senses, to form a just judgement of plausible appearances, and to take a survey of the nature of the universe and of the things which happen in it.",
    author: "Marcus Aurelius",
    source: "Meditations 8.26",
  },
  {
    text: "There are three relations between thee and other things: the one to the body which surrounds thee; the second to the divine cause from which all things come to all; and the third to those who live with thee.",
    author: "Marcus Aurelius",
    source: "Meditations 8.27",
  },
  {
    text: "Pain is either an evil to the body- then let the body say what it thinks of it- or to the soul; but it is in the power of the soul to maintain its own serenity and tranquility, and not to think that pain is an evil. For every judgement and movement and desire and aversion is within, and no evil ascends so high.",
    author: "Marcus Aurelius",
    source: "Meditations 8.28",
  },
  {
    text: "Wipe out thy imaginations by often saying to thyself: \"now it is in my power to let no badness be in this soul, nor desire nor any perturbation at all; but looking at all things I see what is their nature, and I use each according to its value.\" Remember this power which thou hast from nature.",
    author: "Marcus Aurelius",
    source: "Meditations 8.29",
  },
  {
    text: "Speak both in the senate and to every man, whoever he may be, appropriately, not with any affectation: use plain discourse.",
    author: "Marcus Aurelius",
    source: "Meditations 8.30",
  },
  {
    text: "Receive wealth or prosperity without arrogance; and be ready to let it go.",
    author: "Marcus Aurelius",
    source: "Meditations 8.33",
  },
  {
    text: "If thou canst see sharp, look and judge wisely, says the philosopher.",
    author: "Marcus Aurelius",
    source: "Meditations 8.38",
  },
  {
    text: "In the constitution of the rational animal I see no virtue which is opposed to justice; but I see a virtue which is opposed to love of pleasure, and that is temperance.",
    author: "Marcus Aurelius",
    source: "Meditations 8.39",
  },
  {
    text: "If thou takest away thy opinion about that which appears to give thee pain, thou thyself standest in perfect security. \"Who is this self?\" The reason. \"But I am not reason.\" Be it so. Let then the reason itself not trouble itself. But if any other part of thee suffers, let it have its own opinion about itself.",
    author: "Marcus Aurelius",
    source: "Meditations 8.40",
  },
  {
    text: "It is not fit that I should give myself pain, for I have never intentionally given pain even to another.",
    author: "Marcus Aurelius",
    source: "Meditations 8.42",
  },
  {
    text: "Different things delight different people. But it is my delight to keep the directing mind sound without turning away either from any man or from any of the things which happen to men, but looking at and receiving all with welcome eyes and using everything according to its value.",
    author: "Marcus Aurelius",
    source: "Meditations 8.43",
  },
  {
    text: "See that thou secure this present time to thyself: for those who rather pursue posthumous fame do consider that the men of after time will be exactly such as these whom they cannot bear now; and both are mortal. And what is it in any way to thee if these men of after time utter this or that sound, or have this or that opinion about thee?",
    author: "Marcus Aurelius",
    source: "Meditations 8.44",
  },
  {
    text: "Dost thou wish to be praised by a man who curses himself thrice every hour? Wouldst thou wish to please a man who does not please himself? Does a man please himself who repents of nearly everything that he does?",
    author: "Marcus Aurelius",
    source: "Meditations 8.53",
  },
  {
    text: "Generally, wickedness does no harm at all to the universe; and particularly, the wickedness of one man does no harm to another. It is only harmful to him who has it in his power to be released from it, as soon as he shall choose.",
    author: "Marcus Aurelius",
    source: "Meditations 8.55",
  },
  {
    text: "He who fears death either fears the loss of sensation or a different kind of sensation. But if thou shalt have no sensation, neither wilt thou feel any harm; and if thou shalt acquire another kind of sensation, thou wilt be a different kind of living being and thou wilt not cease to live.",
    author: "Marcus Aurelius",
    source: "Meditations 8.58",
  },
  {
    text: "Men exist for the sake of one another. Teach them then or bear with them.",
    author: "Marcus Aurelius",
    source: "Meditations 8.59",
  },
  {
    text: "In one way an arrow moves, in another way the mind. The mind indeed, both when it exercises caution and when it is employed about inquiry, moves straight onward not the less, and to its object.",
    author: "Marcus Aurelius",
    source: "Meditations 8.60",
  },
  {
    text: "He who does wrong does wrong against himself. He who acts unjustly acts unjustly to himself, because he makes himself bad.",
    author: "Marcus Aurelius",
    source: "Meditations 9.4",
  },
  {
    text: "He often acts unjustly who does not do a certain thing; not only he who does a certain thing.",
    author: "Marcus Aurelius",
    source: "Meditations 9.5",
  },
  {
    text: "Thy present opinion founded on understanding, and thy present conduct directed to social good, and thy present disposition of contentment with everything which happens- that is enough.",
    author: "Marcus Aurelius",
    source: "Meditations 9.6",
  },
  {
    text: "Wipe out imagination: check desire: extinguish appetite: keep your directing mind in its own power.",
    author: "Marcus Aurelius",
    source: "Meditations 9.7",
  },
  {
    text: "Among the animals which have not reason one life is distributed; but among reasonable animals one intelligent soul is distributed: just as there is one earth of all things which are of an earthy nature, and we see by one light, and breathe one air, all of us that have the faculty of vision and all that have life.",
    author: "Marcus Aurelius",
    source: "Meditations 9.8",
  },
  {
    text: "Both man and God and the universe produce fruit; at the proper seasons each produces it. But if usage has especially fixed these terms to the vine and like things, this is nothing. Reason produces fruit both for all and for itself, and there are produced from it other things of the same kind as reason itself.",
    author: "Marcus Aurelius",
    source: "Meditations 9.10",
  },
  {
    text: "If thou art able, correct by teaching those who do wrong; but if thou canst not, remember that indulgence is given to thee for this purpose. And the gods, too, are indulgent to such persons; and for some purposes they even help them to get health, wealth, reputation; so kind they are. And it is in thy power also; or say, who hinders thee?",
    author: "Marcus Aurelius",
    source: "Meditations 9.11",
  },
  {
    text: "Labour not as one who is wretched, nor yet as one who would be pitied or admired: but direct thy will to one thing only, to put thyself in motion and to check thyself, as the social reason requires.",
    author: "Marcus Aurelius",
    source: "Meditations 9.12",
  },
  {
    text: "To-day I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.",
    author: "Marcus Aurelius",
    source: "Meditations 9.13",
  },
  {
    text: "All things are the same, familiar in experience, and ephemeral in time, and worthless in the matter. Everything now is just as it was in the time of those whom we have buried.",
    author: "Marcus Aurelius",
    source: "Meditations 9.14",
  },
  {
    text: "Things stand outside of us, themselves by themselves, neither knowing aught of themselves, nor expressing any judgement. What is it, then, which does judge about them? Our directing mind.",
    author: "Marcus Aurelius",
    source: "Meditations 9.15",
  },
  {
    text: "Not in passivity, but in activity lie the evil and the good of the rational social animal, just as his virtue and his vice lie not in passivity, but in activity.",
    author: "Marcus Aurelius",
    source: "Meditations 9.16",
  },
  {
    text: "For the stone which has been thrown up it is no evil to come down, nor indeed any good to have been carried up.",
    author: "Marcus Aurelius",
    source: "Meditations 9.17",
  },
  {
    text: "Penetrate inwards into men's leading principles, and thou wilt see what judges thou art afraid of, and what kind of judges they are of themselves.",
    author: "Marcus Aurelius",
    source: "Meditations 9.18",
  },
  {
    text: "All things are changing: and thou thyself art in continuous mutation and in a manner in continuous destruction, and the whole universe too.",
    author: "Marcus Aurelius",
    source: "Meditations 9.19",
  },
  {
    text: "It is thy duty to leave another man's wrongful act there where it is.",
    author: "Marcus Aurelius",
    source: "Meditations 9.20",
  },
  {
    text: "Quarrels of little children and their sports, and poor spirits carrying about dead bodies, such is everything; and so what is exhibited in the representation of the mansions of the dead strikes our eyes more clearly.",
    author: "Marcus Aurelius",
    source: "Meditations 9.24",
  },
  {
    text: "Examine into the quality of the form of an object, and detach it altogether from its material part, and then contemplate it; then determine the time, the longest which a thing of this peculiar form is naturally made to endure.",
    author: "Marcus Aurelius",
    source: "Meditations 9.25",
  },
  {
    text: "Thou hast endured infinite troubles through not being contented with thy directing mind, when it does the things which it is constituted by nature to do. But enough of this.",
    author: "Marcus Aurelius",
    source: "Meditations 9.26",
  },
  {
    text: "Let there be freedom from perturbations with respect to the things which come from the external cause; and let there be justice in the things done by virtue of the internal cause, that is, let there be movement and action terminating in this, in social acts, for this is according to thy nature.",
    author: "Marcus Aurelius",
    source: "Meditations 9.31",
  },
  {
    text: "All that thou seest will quickly perish, and those who have been spectators of its dissolution will very soon perish too. And he who dies at the extremest old age will be brought into the same condition with him who died prematurely.",
    author: "Marcus Aurelius",
    source: "Meditations 9.33",
  },
  {
    text: "What are these men's leading principles, and about what kind of things are they busy, and for what kind of reasons do they love and honour? Imagine that thou seest their poor souls laid bare. When they think that they do harm by their blame or good by their praise, what an idea!",
    author: "Marcus Aurelius",
    source: "Meditations 9.34",
  },
  {
    text: "If any man has done wrong, the harm is his own. But perhaps he has not done wrong.",
    author: "Marcus Aurelius",
    source: "Meditations 9.38",
  },
  {
    text: "If a man is mistaken, instruct him kindly and show him his error. But if thou art not able, blame thyself, or blame not even thyself.",
    author: "Marcus Aurelius",
    source: "Meditations 10.4",
  },
  {
    text: "Whatever may happen to thee, it was prepared for thee from all eternity; and the implication of causes was from eternity spinning the thread of thy being, and of that which is incident to it.",
    author: "Marcus Aurelius",
    source: "Meditations 10.5",
  },
  {
    text: "A spider is proud when it has caught a fly, and another when he has caught a poor hare, and another when he has taken a little fish in a net, and another when he has taken wild boars, and another when he has taken bears, and another when he has taken Sarmatians. Are not these robbers, if thou examinest their opinions?",
    author: "Marcus Aurelius",
    source: "Meditations 10.10",
  },
  {
    text: "To her who gives and takes back all, to nature, the man who is instructed and modest says, Give what thou wilt; take back what thou wilt. And he says this not proudly, but obediently and well pleased with her.",
    author: "Marcus Aurelius",
    source: "Meditations 10.14",
  },
  {
    text: "No longer talk at all about the kind of man that a good man ought to be, but be such.",
    author: "Marcus Aurelius",
    source: "Meditations 10.16",
  },
  {
    text: "Constantly contemplate the whole of time and the whole of substance, and consider that all individual things as to substance are a grain of a fig, and as to time, the turning of a gimlet.",
    author: "Marcus Aurelius",
    source: "Meditations 10.17",
  },
  {
    text: "Look at everything that exists, and observe that it is already in dissolution and in change, and as it were putrefaction or dispersion, or that everything is so constituted by nature as to die.",
    author: "Marcus Aurelius",
    source: "Meditations 10.18",
  },
  {
    text: "That is for the good of each thing, which the universal nature brings to each. And it is for its good at the time when nature brings it.",
    author: "Marcus Aurelius",
    source: "Meditations 10.20",
  },
  {
    text: "\"The earth loves the shower\"; and \"the solemn aether loves\": and the universe loves to make whatever is about to be. I say then to the universe, that I love as thou lovest. And is not this too said, that \"this or that loves (is wont) to be produced\"?",
    author: "Marcus Aurelius",
    source: "Meditations 10.21",
  },
  {
    text: "Either thou livest here and hast already accustomed thyself to it, or thou art going away, and this was thy own will; or thou art dying and hast discharged thy duty. But besides these things there is nothing. Be of good cheer, then.",
    author: "Marcus Aurelius",
    source: "Meditations 10.22",
  },
  {
    text: "Let this always be plain to thee, that this piece of land is like any other; and that all things here are the same with things on top of a mountain, or on the sea-shore, or wherever thou choosest to be. For thou wilt find just what Plato says, Dwelling within the walls of a city as in a shepherd's fold on a mountain.",
    author: "Marcus Aurelius",
    source: "Meditations 10.23",
  },
  {
    text: "What is my directing mind now to me? And of what nature am I now making it? And for what purpose am I now using it? Is it void of understanding? Is it loosed and rent asunder from social life? Is it melted into and mixed with the poor flesh so as to move together with it?",
    author: "Marcus Aurelius",
    source: "Meditations 10.24",
  },
  {
    text: "Severally on the occasion of everything that thou doest, pause and ask thyself, if death is a dreadful thing because it deprives thee of this.",
    author: "Marcus Aurelius",
    source: "Meditations 10.29",
  },
  {
    text: "Accustom thyself as much as possible on the occasion of anything being done by any person to inquire with thyself, For what object is this man doing this? But begin with thyself, and examine thyself first.",
    author: "Marcus Aurelius",
    source: "Meditations 10.37",
  },
  {
    text: "Have I done something for the common good? Well then I have had my reward. Let this always be present to thy mind, and never stop doing such good.",
    author: "Marcus Aurelius",
    source: "Meditations 11.4",
  },
  {
    text: "What is thy profession? To be good. And how is this accomplished well except by general principles, some about the nature of the universe, and others about the proper constitution of man?",
    author: "Marcus Aurelius",
    source: "Meditations 11.5",
  },
  {
    text: "How plain does it appear that there is not another condition of life so well suited for philosophising as this in which thou now happenest to be.",
    author: "Marcus Aurelius",
    source: "Meditations 11.7",
  },
  {
    text: "If the things do not come to thee, the pursuits and avoidances of which disturb thee, still in a manner thou goest to them. Let then thy judgement about them be at rest, and they will remain quiet, and thou wilt not be seen either pursuing or avoiding.",
    author: "Marcus Aurelius",
    source: "Meditations 11.11",
  },
  {
    text: "The spherical form of the soul maintains its figure, when it is neither extended towards any object, nor contracted inwards, nor dispersed nor sinks down, but is illuminated by light, by which it sees the truth, the truth of all things and the truth that is in itself.",
    author: "Marcus Aurelius",
    source: "Meditations 11.12",
  },
  {
    text: "Men despise one another and flatter one another; and men wish to raise themselves above one another, and crouch before one another.",
    author: "Marcus Aurelius",
    source: "Meditations 11.14",
  },
  {
    text: "Consider whence each thing is come, and of what it consists, and into what it changes, and what kind of a thing it will be when it has changed, and that it will sustain no harm.",
    author: "Marcus Aurelius",
    source: "Meditations 11.17",
  },
  {
    text: "Think of the country mouse and of the town mouse, and of the alarm and trepidation of the town mouse.",
    author: "Marcus Aurelius",
    source: "Meditations 11.23",
  },
  {
    text: "Socrates used to call the opinions of the many by the name of Lamiae, bugbears to frighten children.",
    author: "Marcus Aurelius",
    source: "Meditations 11.24",
  },
  {
    text: "The Spartans, at their public spectacles used to set seats in the shade for strangers, but themselves sat down anywhere.",
    author: "Marcus Aurelius",
    source: "Meditations 11.25",
  },
  {
    text: "Socrates excused himself to Perdiccas for not going to him, saying, It is because I would not perish by the worst of all ends, that is, I would not receive a favour and then be unable to return it.",
    author: "Marcus Aurelius",
    source: "Meditations 11.26",
  },
  {
    text: "In the writings of the Ephesians there was this precept, constantly to think of some one of the men of former times who practised virtue.",
    author: "Marcus Aurelius",
    source: "Meditations 11.27",
  },
  {
    text: "The Pythagoreans bid us in the morning look to the heavens that we may be reminded of those bodies which continually do the same things and in the same manner perform their work, and also be reminded of their purity and nudity. For there is no veil over a star.",
    author: "Marcus Aurelius",
    source: "Meditations 11.28",
  },
  {
    text: "Consider what a man Socrates was when he dressed himself in a skin, after Xanthippe had taken his cloak and gone out, and what Socrates said to his friends who were ashamed of him and drew back from him when they saw him dressed thus.",
    author: "Marcus Aurelius",
    source: "Meditations 11.29",
  },
  {
    text: "Neither in writing nor in reading wilt thou be able to lay down rules for others before thou shalt have first learned to obey rules thyself. Much more is this so in life.",
    author: "Marcus Aurelius",
    source: "Meditations 11.30",
  },
  {
    text: "\"A slave thou art: free speech is not for thee.\"",
    author: "Marcus Aurelius",
    source: "Meditations 11.31",
  },
  {
    text: "\"And virtue they will curse, speaking harsh words.\"",
    author: "Marcus Aurelius",
    source: "Meditations 11.33",
  },
  {
    text: "To look for the fig in winter is a madman's act: such is he who looks for his child when it is no longer allowed.",
    author: "Marcus Aurelius",
    source: "Meditations 11.34",
  },
  {
    text: "When a man kisses his child, said Epictetus, he should whisper to himself, \"To-morrow perchance thou wilt die.\"- But those are words of bad omen. \"No word is a word of bad omen,\" said Epictetus, \"which expresses any work of nature; or if it is so, it is also a word of bad omen to speak of the ears of corn being reaped.\"",
    author: "Marcus Aurelius",
    source: "Meditations 11.35",
  },
  {
    text: "The unripe grape, the ripe bunch, the dried grape, all are changes, not into nothing, but into something which exists not yet.",
    author: "Marcus Aurelius",
    source: "Meditations 11.36",
  },
  {
    text: "\"No man can rob us of our free will\" - so Epictetus.",
    author: "Marcus Aurelius",
    source: "Meditations 11.37",
  },
  {
    text: "The dispute then, he said, is not about any common matter, but about being mad or not.",
    author: "Marcus Aurelius",
    source: "Meditations 11.39",
  },
  {
    text: "Practise thyself even in the things which thou despairest of accomplishing. For even the left hand, which is ineffectual for all other things for want of practice, holds the bridle more vigorously than the right hand; for it has been practised in this.",
    author: "Marcus Aurelius",
    source: "Meditations 12.6",
  },
  {
    text: "Consider in what condition both in body and soul a man should be when he is overtaken by death; and consider the shortness of life, the boundless abyss of time past and future, the feebleness of all matter.",
    author: "Marcus Aurelius",
    source: "Meditations 12.7",
  },
  {
    text: "Contemplate the formative principles (forms) of things bare of their coverings; the purposes of actions; consider what pain is, what pleasure is, and death, and fame; who is to himself the cause of his uneasiness; how no man is hindered by another; that everything is opinion.",
    author: "Marcus Aurelius",
    source: "Meditations 12.8",
  },
  {
    text: "In the application of thy principles thou must be like the boxer, not like the gladiator; for the gladiator lets fall the sword which he uses and is killed; but the other always has his hand, and needs to do nothing else than use it.",
    author: "Marcus Aurelius",
    source: "Meditations 12.9",
  },
  {
    text: "See what things are in themselves, dividing them into matter, form and purpose.",
    author: "Marcus Aurelius",
    source: "Meditations 12.10",
  },
  {
    text: "What a power man has to do nothing except what God will approve, and to accept all that God may give him.",
    author: "Marcus Aurelius",
    source: "Meditations 12.11",
  },
  {
    text: "With respect to that which happens conformably to nature, we ought to blame neither gods, for they do nothing wrong either voluntarily or involuntarily, nor men, for they do nothing wrong except involuntarily. Consequently we should blame nobody.",
    author: "Marcus Aurelius",
    source: "Meditations 12.12",
  },
  {
    text: "How ridiculous and what a stranger he is who is surprised at anything which happens in life.",
    author: "Marcus Aurelius",
    source: "Meditations 12.13",
  },
  {
    text: "Does the light of the lamp shine without losing its splendour until it is extinguished; and shall the truth which is in thee and justice and temperance be extinguished before thy death?",
    author: "Marcus Aurelius",
    source: "Meditations 12.15",
  },
  {
    text: "In everything always observe what the thing is which produces for thee an appearance, and resolve it by dividing it into the formal, the material, the purpose, and the time within which it must end.",
    author: "Marcus Aurelius",
    source: "Meditations 12.18",
  },
  {
    text: "Perceive at last that thou hast in thee something better and more divine than the things which cause the various affects, and as it were pull thee by the strings. What is there now in my mind? Is it fear, or suspicion, or desire, or anything of the kind?",
    author: "Marcus Aurelius",
    source: "Meditations 12.19",
  },
  {
    text: "First, do nothing inconsiderately, nor without a purpose. Second, make thy acts refer to nothing else than to a social end.",
    author: "Marcus Aurelius",
    source: "Meditations 12.20",
  },
  {
    text: "Consider that before long thou wilt be nobody and nowhere, nor will any of the things exist which thou now seest, nor any of those who are now living. For all things are formed by nature to change and be turned and to perish in order that other things in continuous succession may exist.",
    author: "Marcus Aurelius",
    source: "Meditations 12.21",
  },
  {
    text: "Consider that everything is opinion, and opinion is in thy power. Take away then, when thou choosest, thy opinion, and like a mariner, who has doubled the promontory, thou wilt find calm, everything stable, and a waveless bay.",
    author: "Marcus Aurelius",
    source: "Meditations 12.22",
  },
  {
    text: "Cast away opinion: thou art saved. Who then hinders thee from casting it away?",
    author: "Marcus Aurelius",
    source: "Meditations 12.25",
  },
  {
    text: "The salvation of life is this, to examine everything all through, what it is itself, that is its material, what the formal part; with all thy soul to do justice and to say the truth. What remains, except to enjoy life by joining one good thing to another so as not to leave even the smallest intervals between?",
    author: "Marcus Aurelius",
    source: "Meditations 12.29",
  },
];

const additionalStoicQuotes: StoicQuote[] = [
  // --- SENECA ---
  {
    text: "Nusquam est qui ubique est. (One who is everywhere is nowhere.)",
    author: "Seneca",
    source: "Letters to Lucilius 2",
  },
  {
    text: "Omnia aliena sunt, tempus tantum nostrum est. (Everything is alien to us; time alone belongs to us.)",
    author: "Seneca",
    source: "Letters to Lucilius 1",
  },
  {
    text: "Recede in te ipse quantum potes. (Withdraw into yourself as much as you can.)",
    author: "Seneca",
    source: "Letters to Lucilius 7",
  },
  {
    text: "Inimica est multorum conversatio. (The company of many people is harmful.)",
    author: "Seneca",
    source: "Letters to Lucilius 7",
  },
  {
    text: "Per aspera ad astra. (Through hardships to the stars.)",
    author: "Seneca",
    source: "Hercules Furens 437",
  },
  {
    text: "Nemo liber est qui corpori servit. (No one is free who is a slave to his body.)",
    author: "Seneca",
    source: "Letters to Lucilius 77",
  },
  {
    text: "Dum differtur vita transcurrit. (While we delay, life passes.)",
    author: "Seneca",
    source: "On the Shortness of Life 1",
  },
  {
    text: "The bravest sight in the world is a great man struggling against adversity.",
    author: "Seneca",
    source: "On Providence 2",
  },
  {
    text: "True friendship is to be treated as a single soul in two bodies.",
    author: "Seneca",
    source: "Letters to Lucilius 6",
  },
  {
    text: "He who fears death will never do anything worthy of a living man.",
    author: "Seneca",
    source: "Letters to Lucilius 78",
  },
  {
    text: "To bear trials with a calm mind robs misfortune of its strength and burden.",
    author: "Seneca",
    source: "Hercules Oetaeus",
  },
  {
    text: "No one has been shattered by the blows of Fortune unless he was first deceived by her favors.",
    author: "Seneca",
    source: "On the Constancy of the Wise Man 17",
  },
  {
    text: "What progress have I made? I am beginning to be my own friend.",
    author: "Seneca",
    source: "Letters to Lucilius 6",
  },
  {
    text: "Grow old in seeking and do not abandon the ship before you have loaded it.",
    author: "Seneca",
    source: "Letters to Lucilius 72",
  },
  {
    text: "Let reason guide you, not chance.",
    author: "Seneca",
    source: "Letters to Lucilius 8",
  },
  {
    text: "Happy is the man who improves other people and who progresses himself.",
    author: "Seneca",
    source: "Letters to Lucilius 7",
  },
  {
    text: "We should hunt out the helpful wherever it is to be found.",
    author: "Seneca",
    source: "Letters to Lucilius 8",
  },
  {
    text: "Retire into yourself as much as you can.",
    author: "Seneca",
    source: "Letters to Lucilius 7",
  },
  {
    text: "The fool runs after pleasures which soon remove themselves; the wise man pursues a durable good.",
    author: "Seneca",
    source: "On the Happy Life 7",
  },
  {
    text: "Give, but give to the person who deserves.",
    author: "Seneca",
    source: "Letters to Lucilius 87",
  },
  {
    text: "Philosophy promises above all—common sense, humanity, and fellowship.",
    author: "Seneca",
    source: "Letters to Lucilius 5",
  },
  {
    text: "If you shape your life according to nature, you will never be poor; if according to people's opinions, you will never be rich.",
    author: "Seneca",
    source: "Letters to Lucilius 16",
  },
  {
    text: "The wise man neither asks for help nor refuses it.",
    author: "Seneca",
    source: "Letters to Lucilius 9",
  },
  {
    text: "Hold every hour in your grasp.",
    author: "Seneca",
    source: "Letters to Lucilius 1",
  },
  {
    text: "A sword never kills anybody; it is a tool in the killer's hand.",
    author: "Seneca",
    source: "Letters to Lucilius 87",
  },
  // --- EPICTETUS ---
  {
    text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus",
    source: "Enchiridion 1",
  },
  {
    text: "Seek not the good in external things; seek it in yourself.",
    author: "Epictetus",
    source: "Discourses 1.4",
  },
  {
    text: "You are not your body and hair-style, but your capacity for choice.",
    author: "Epictetus",
    source: "Discourses 3.1",
  },
  {
    text: "It is difficulties that show what men are.",
    author: "Epictetus",
    source: "Discourses 1.24",
  },
  {
    text: "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, 'He was ignorant of my other faults, else he would not have mentioned these alone.'",
    author: "Epictetus",
    source: "Enchiridion 33",
  },
  {
    text: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "Anyone who has the power to make you believe absurdities has the power to make you commit injustices.",
    author: "Epictetus",
    source: "Discourses 2.24",
  },
  {
    text: "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "Whoever does not regard what he has as most ample wealth is unhappy, though he be master of the whole world.",
    author: "Epictetus",
    source: "Fragments",
  },
  {
    text: "Practice yourself in little things, and thence proceed to greater.",
    author: "Epictetus",
    source: "Discourses 1.18",
  },
  {
    text: "Nothing great is created suddenly, any more than a bunch of grapes or a fig.",
    author: "Epictetus",
    source: "Discourses 1.15",
  },
  {
    text: "When you are offended at any man's fault, turn to yourself and study your own failings.",
    author: "Epictetus",
    source: "Enchiridion 18",
  },
  {
    text: "We cannot choose our external circumstances, but we can always choose how we respond to them.",
    author: "Epictetus",
    source: "Enchiridion 1",
  },
  {
    text: "Don't seek to have events happen as you wish, but wish them to happen as they do happen, and all will be well with you.",
    author: "Epictetus",
    source: "Enchiridion 8",
  },
  {
    text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life.",
    author: "Epictetus",
    source: "Enchiridion 8",
  },
  {
    text: "He is a man of sense who does not grieve for what he has not, but rejoices in what he has.",
    author: "Epictetus",
    source: "Fragments",
  },
  // --- MARCUS AURELIUS (additional) ---
  {
    text: "The present moment always will have been.",
    author: "Marcus Aurelius",
    source: "Meditations 9.6",
  },
  {
    text: "Honor that which is greatest in the world—that on account of which all else is great.",
    author: "Marcus Aurelius",
    source: "Meditations 5.21",
  },
  {
    text: "Pain is neither intolerable nor everlasting, if you remember its limits and do not add to it with your imagination.",
    author: "Marcus Aurelius",
    source: "Meditations 7.64",
  },
  {
    text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    author: "Marcus Aurelius",
    source: "Meditations 8.47",
  },
  {
    text: "We are more often frightened than hurt; and we suffer more from imagination than from reality.",
    author: "Marcus Aurelius",
    source: "Meditations 5.8",
  },
  {
    text: "Be like the headland against which the waves break and break: it stands firm, until presently the watery tumult around it subsides once more to rest.",
    author: "Marcus Aurelius",
    source: "Meditations 4.49",
  },
  {
    text: "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly.",
    author: "Marcus Aurelius",
    source: "Meditations 2.1",
  },
  {
    text: "Perfection of character is this: to live each day as if it were your last, without frenzy, without apathy, without pretense.",
    author: "Marcus Aurelius",
    source: "Meditations 7.69",
  },
  {
    text: "Life is warfare and a journey far from home.",
    author: "Marcus Aurelius",
    source: "Meditations 2.17",
  },
  {
    text: "How much more grievous are the consequences of anger than the causes of it.",
    author: "Marcus Aurelius",
    source: "Meditations 11.18",
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
    source: "Meditations 7.67",
  },
  {
    text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
    author: "Marcus Aurelius",
    source: "Meditations 3.7",
  },
  {
    text: "Reject your sense of injury and the injury itself disappears.",
    author: "Marcus Aurelius",
    source: "Meditations 4.7",
  },
  {
    text: "The soul becomes dyed with the color of its thoughts.",
    author: "Marcus Aurelius",
    source: "Meditations 5.16",
  },
  // --- ZENO OF CITIUM ---
  {
    text: "Steel your sensibilities, so that life shall hurt you as little as possible.",
    author: "Zeno of Citium",
    source: "Fragments",
  },
  {
    text: "Man conquers the world by conquering himself.",
    author: "Zeno of Citium",
    source: "Fragments",
  },
  {
    text: "The reason we have two ears and only one mouth is that we may listen the more and talk the less.",
    author: "Zeno of Citium",
    source: "Diogenes Laërtius 7.23",
  },
  {
    text: "A goal without a method is foolishness.",
    author: "Zeno of Citium",
    source: "Fragments",
  },
  // --- CHRYSIPPUS ---
  {
    text: "The universe itself is God and the universal outpouring of its soul.",
    author: "Chrysippus",
    source: "Fragments",
  },
  {
    text: "If I am not, then I am free. If I am, then I am free.",
    author: "Chrysippus",
    source: "Fragments",
  },
  {
    text: "Cling to the good in every circumstance.",
    author: "Chrysippus",
    source: "Fragments",
  },
  // --- CLEANTHES ---
  {
    text: "Lead me, Zeus, and you too, Destiny, wherever your decrees have assigned me. I follow willingly.",
    author: "Cleanthes",
    source: "Hymn to Zeus",
  },
  {
    text: "The sun, too, shines into cesspools and is not polluted.",
    author: "Cleanthes",
    source: "Fragments",
  },
  // --- MUSONIUS RUFUS ---
  {
    text: "Above all, a human being must take care to think and act well and not be carried away by either pain or pleasure.",
    author: "Musonius Rufus",
    source: "Lectures 6",
  },
  {
    text: "Of all existing things, some are in our power and some are not in our power.",
    author: "Musonius Rufus",
    source: "Lectures 1",
  },
  {
    text: "The person who has everything should be considered fortunate; the person who desires only what they have should be considered very fortunate.",
    author: "Musonius Rufus",
    source: "Lectures 17",
  },
  {
    text: "Eating merely for pleasure and not to strengthen the body is wrong.",
    author: "Musonius Rufus",
    source: "Lectures 18",
  },
  {
    text: "We should not consider any action virtuous unless it has the good of others as its object.",
    author: "Musonius Rufus",
    source: "Lectures 4",
  },
  {
    text: "Endure the pain that comes from practice, and not the pain that comes from disgrace.",
    author: "Musonius Rufus",
    source: "Lectures 6",
  },
  // --- MARCUS AURELIUS (more unique) ---
  {
    text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly. What doesn't transmit light creates its own darkness.",
    author: "Marcus Aurelius",
    source: "Meditations 7.9",
  },
  {
    text: "You have power over your mind, not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    source: "Meditations 6.8",
  },
  {
    text: "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
    author: "Marcus Aurelius",
    source: "Meditations 6.2",
  },
  {
    text: "Whoever has a why to live can bear almost any how.",
    author: "Marcus Aurelius",
    source: "Meditations 7.1",
  },
  {
    text: "It's time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.",
    author: "Marcus Aurelius",
    source: "Meditations 12.19",
  },
  {
    text: "When you arise in the morning, think of what a privilege it is to be alive—to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius",
    source: "Meditations 2.4",
  },
  {
    text: "You always own the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control.",
    author: "Marcus Aurelius",
    source: "Meditations 6.52",
  },
  {
    text: "Never let the things you own end up owning you.",
    author: "Marcus Aurelius",
    source: "Meditations 8.7",
  },
  {
    text: "How much trouble he avoids who does not look to see what his neighbor says or does or thinks.",
    author: "Marcus Aurelius",
    source: "Meditations 4.18",
  },
  {
    text: "The universe is transformation; life is opinion.",
    author: "Marcus Aurelius",
    source: "Meditations 4.3",
  },
];

export const stoicQuotes: StoicQuote[] = [
  ...curatedStoicQuotes,
  ...expandedMeditationsQuotes,
  ...additionalStoicQuotes,
];

export const footerMessages = [
  "Memento vivere.",
  "Endure. Act.",
  "The time is now.",
  "Amor fati.",
  "This too shall pass.",
];
