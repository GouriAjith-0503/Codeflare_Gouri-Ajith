/**
 * ============================================================================
 * Project: Veilweave — Myths of the World
 * Author: Gouri Ajith
 *
 * System Modules:
 * 1. REGIONAL PALETTE CONTROLLER: Dynamic accent shifts & ambient glow
 * 2. WEB AUDIO API SYNTHESIZER: Zero-dependency sound effects
 * 3. AMBIENT PARTICLES: HTML5 Canvas stardust simulation
 * 4. NAVIGATION CONTROLLER: Accessible tab switching & view updates
 * 5. MULTI-STORY SHOWCASE: 7 world mythologies with multiple animated stories
 * 6. PROGRESSIVE MULTI-LEVEL MATCH: 6 -> 12 -> 16 -> 20 tiles memory game
 * 7. RIDDLE TRIALS: 15s timed mythological trivia quiz
 * 8. LEGENDARY CREATURE CROSSWORDS: Interactive digital & printable puzzle
 * 9. MYTHOS SPARK: Creative myth prompt generator
 * ============================================================================
 */

'use strict';

/* ==========================================================================
   SECTION 1: STORAGE & CULTURAL METADATA
   ========================================================================== */
const STORAGE_KEYS = {
  EXPLORED_MYTHS: 'veilweave_explored_myths',
  MATCH_BEST: 'veilweave_match_best_moves',
  QUIZ_RECORD: 'veilweave_quiz_record',
  AUDIO_MUTED: 'veilweave_audio_muted',
  SAVED_SPARKS: 'veilweave_saved_sparks'
};

/**
 * Multi-Story Showcase: 7 Ancient World Mythologies
 * Contains the authentic, complete traditional legends requested by the user,
 * each with dedicated moving animated artwork in that culture's distinct style.
 */
const CULTURAL_STORIES = {
  indian: {
    name: "Indian",
    cultureTag: "Indian • Sacred Marigold, Crimson & The Cosmic Churning",
    glowClass: "glow-indian",
    pantheonId: "indian",
    stories: [
      {
        id: "samudra_manthan",
        subTitle: "Samudra Manthan",
        title: "The Churning of the Ocean: Amrita, Mount Mandara & Lord Shiva's Blue Throat",
        readingTime: "✦ 4 min read",
        quote: "When the venom of cosmic existence threatened creation, the Great Ascetic held the poison in his throat that the worlds might breathe.",
        image: {
          url: "https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=1200&q=80",
          caption: "Sacred Churning of the Ocean Reliefs, Ancient Temple Architecture",
          source: "Archaeological Survey of India",
          motion: "kenburns-zoom"
        },
        text: [
          "In the ancient Vedic cosmology of the Indian subcontinent, born along the sacred Saraswati and Indus rivers, the universe is governed by Rta (cosmic order) and the eternal dance between opposing spiritual forces. When sage Durvasa's curse stripped Indra and the Devas of their celestial luster, the Asuras conquered the three worlds. Desperate to restore universal equilibrium, Lord Vishnu counseled the Devas to forge a temporary pact with the Asuras to churn the Kshira Sagara—the primordial Ocean of Milk—and extract Amrita, the golden nectar of immortality.",
          "To accomplish this cosmic task, the deities uprooted Mount Mandara to serve as the churning rod and persuaded the giant serpent king Vasuki to wrap around it as the churning rope. As both sides pulled in alternating rhythm—the Asuras grasping Vasuki's venomous head and the Devas holding his tail—the sheer weight of Mount Mandara began sinking into the bottomless cosmic depths. Witnessing the universe on the verge of ruin, Lord Vishnu assumed the gigantic Kurma (tortoise) avatar, diving beneath the waves to bear the colossal mountain upon his indestructible shell.",
          "As the ocean churned with cosmic intensity, it first exhaled Halahala—a blinding, lethal poison so concentrated and scorching that its vapors threatened to consume gods, demons, and all living mortals. When all beings recoiled in terror, Lord Shiva, the Mahadeva, stepped forward and fearlessly swallowed the deadly toxin. To prevent the poison from searing his vital organs, his consort Parvati gently grasped his throat, arresting the venom there. The poison turned Shiva's neck a brilliant deep cobalt, bestowing upon him the eternal title Neelakantha, the Blue-Throated Savior.",
          "With the lethal danger neutralized, the churning resumed with divine grace, releasing fourteen sacred treasures into the universe: the wish-granting cow Kamadhenu, the celestial steed Uchchaihshravas, the four-tusked elephant Airavata, the jewel Kaustubha, the blossoming Parijata tree, and the goddess Lakshmi seated upon a golden lotus. Finally, Dhanvantari, the divine healer, arose from the frothing milk carrying the golden Amrita Kalasha. Through cooperation, sacrifice, and the enduring power of Dharma, immortality and divine order were restored to the cosmos."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Cosmic equilibrium, cooperative churning, and supreme selfless sacrifice" },
          { label: "Sacred Relics", val: "The Golden Amrita Kalasha, Mount Mandara & Kurma's Shield" },
          { label: "Key Deities", val: "Lord Shiva (Neelakantha), Lord Vishnu (Kurma), Vasuki, Devas & Asuras" },
          { label: "Philosophical Essence", val: "Tasting the poison of worldly struggle to harvest the immortal nectar of wisdom" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="in-ocean-churn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#008080"/><stop offset="100%" stop-color="#08101E"/>
              </linearGradient>
            </defs>
            <rect width="800" height="270" fill="#0A141E"/>
            <!-- Churning Waves of the Ocean of Milk -->
            <path d="M0 210 Q200 180 400 210 T800 210 L800 270 L0 270 Z" fill="url(#in-ocean-churn)" opacity="0.9" style="animation: waveUndulate 3s infinite ease-in-out;"/>
            <!-- Mount Mandara Churning Rod -->
            <polygon points="360,240 400,55 440,240" fill="#4A3F35"/>
            <!-- Rotating Sacred Mandala in Background -->
            <g transform="translate(400, 110)" class="mandala-rotate" opacity="0.35">
              <circle cx="0" cy="0" r="85" fill="none" stroke="#FF9933" stroke-width="2" stroke-dasharray="8,6"/>
              <circle cx="0" cy="0" r="60" fill="none" stroke="#800020" stroke-width="1.5"/>
              <polygon points="0,-85 60,60 -60,60" fill="none" stroke="#FF9933" stroke-width="1.5"/>
              <polygon points="0,85 60,-60 -60,-60" fill="none" stroke="#FF9933" stroke-width="1.5"/>
            </g>
            <!-- Serpent Vasuki Coiling -->
            <path d="M335 175 Q400 145 465 175 Q400 205 335 175" stroke="#FF9933" stroke-width="6" fill="none" style="animation: serpentCoil 3s infinite ease-in-out;"/>
            <!-- Radiant Golden Amrita Urn with Glowing Diya Motif -->
            <g transform="translate(400, 45)" class="diya-glow">
              <circle cx="0" cy="0" r="24" fill="#FF9933"/>
              <ellipse cx="0" cy="-18" rx="15" ry="5" fill="#E5A823"/>
              <circle cx="0" cy="-24" r="7" fill="#800020"/>
            </g>
          </svg>`
      },
      {
        id: "savitri_satyavan",
        subTitle: "Savitri and Satyavan",
        title: "The Story of Savitri and Satyavan: Defeating Death Through Devotion and Wisdom",
        readingTime: "✦ 4 min read",
        quote: "Dharma is not an armor against grief, but an unquenchable lamp whose flame even the Lord of Death cannot extinguish.",
        image: {
          url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
          caption: "Ancient Sacred Banyan Canopy, Spiritual Grove of Northern India",
          source: "National Museum Archives, New Delhi",
          motion: "kenburns-pan-left"
        },
        text: [
          "In Indian folklore and the grand epic Mahabharata, spiritual wisdom (Jnana) and righteousness (Dharma) are revered as forces capable of altering the decrees of fate itself. Princess Savitri, celebrated for her profound Vedic learning and pure resolve, was granted permission by her father King Ashvapati to wander the land and select her own husband. In a tranquil forest hermitage, she met Prince Satyavan, the devoted son of the blind, exiled king Dyumatsena. Savitri chose him instantly, unswayed by the dire prophecy of the celestial sage Narada, who warned that Satyavan possessed only one year to live.",
          "Accepting her destined path with quiet strength, Savitri lived in humble forest simplicity, honoring her elders and undertaking arduous spiritual fasts. When the fateful dawn arrived, she accompanied Satyavan into the deep woods to gather wood. At midday, Satyavan was stricken by a sudden fever; resting his head in Savitri's lap beneath the sprawling canopy of an ancient banyan tree, his breath ceased.",
          "As shadow enveloped the forest, Lord Yama, the King of Dharma and Sovereign of Death, manifested with a dark visage, fiery crimson eyes, and a silken black cord. Extracting Satyavan's thumb-sized soul, Yama turned southward toward his underworld court. Undaunted by the god's dread presence, Savitri rose and followed in his footsteps across treacherous mountain ridges. When Yama commanded her to return, Savitri delivered discourses of peerless philosophical depth on righteous friendship, duty, and the cosmic permanence of truth.",
          "Astonished by her wisdom, Yama granted her boon after boon—restoring sight and the lost realm to her father-in-law, and blessing her own father with noble sons—stipulating only that she not ask for Satyavan's life. At last, Savitri requested that she be blessed with a hundred noble sons to continue her royal lineage. Yama granted the boon with an inviolable divine oath. Savitri smiled serenely and reminded the Lord of Death: 'As a devoted wife of unyielding virtue, I can bear sons only through my lawful husband.' Bound by his own sacred promise and deeply moved by her devotion, Yama released Satyavan's soul, bowing before the triumph of pure wisdom and love."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Unflinching devotion (Pativrata), intellectual mastery, and the power of Dharma" },
          { label: "Sacred Relics", val: "The Sacred Banyan Tree & The Cord of Yama" },
          { label: "Key Figures", val: "Princess Savitri, Prince Satyavan, Lord Yama, Sage Narada" },
          { label: "Philosophical Essence", val: "Moral clarity and selfless devotion transforming the inviolable decrees of mortality" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#0C1410"/>
            <!-- Spreading Sacred Banyan Tree Canopy -->
            <path d="M250 270 Q280 160 380 120 Q320 60 400 30 Q480 60 420 120 Q520 160 550 270 Z" fill="#008080" opacity="0.8"/>
            <path d="M340 120 L330 230 M460 120 L470 230" stroke="#4A3F35" stroke-width="3"/>
            <!-- Rotating Mandala Motif in Forest Canopy -->
            <g transform="translate(400, 100)" class="mandala-rotate" opacity="0.4">
              <circle cx="0" cy="0" r="50" stroke="#FF9933" stroke-width="1.5" fill="none" stroke-dasharray="4,4"/>
              <polygon points="0,-45 39,23 -39,23" stroke="#800020" stroke-width="1.5" fill="none"/>
            </g>
            <!-- Golden Glow of Savitri's Devotion & Diya Effect -->
            <g transform="translate(400, 185)" class="diya-glow">
              <circle cx="0" cy="0" r="34" fill="#FF9933" opacity="0.75"/>
              <circle cx="0" cy="0" r="18" fill="#F5F2EB" opacity="0.95"/>
            </g>
          </svg>`
      }
    ]
  },
  greek: {
    name: "Greek",
    cultureTag: "Greek • Aegean Azure & Parian Marble Columns",
    glowClass: "glow-greek",
    pantheonId: "greek",
    stories: [
      {
        id: "persephone_demeter",
        subTitle: "Persephone and Demeter",
        title: "The Myth of Persephone and Demeter: The Six Pomegranate Seeds and the Seasons",
        readingTime: "✦ 4 min read",
        quote: "For six months the earth shall weep in barren frost, and for six months blossom in a mother's rejoicing.",
        image: {
          url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
          caption: "Ruins of the Temple of Demeter at Eleusis, Greece",
          source: "National Archaeological Museum of Athens",
          motion: "kenburns-zoom"
        },
        text: [
          "In the ancient Hellenic world, centered upon the sun-drenched islands of the Aegean Sea and the marble city-states of Attica, mythology arose to explain the cyclical rhythms of nature and the mysteries of mortality. In the lush Sicilian meadows of Enna, young Persephone was plucking lilies and narcissi when the earth abruptly split open. Hades, sovereign of the Underworld, surged forth in a chariot of obsidian drawn by four black stallions, seizing the weeping maiden and plunging back into the subterranean abyss.",
          "Demeter, goddess of grain, agriculture, and earth's bounty, heard her daughter's distant cry and searched the world for nine days and nights with blazing pine torches, refusing ambrosia. When Helios, the all-seeing sun, revealed that Hades had abducted her daughter with Zeus's covert consent, Demeter's grief hardened into unrelenting fury. Casting off her radiant Olympian robes, she clothed herself in mourning rags and withheld all fertility from the soil.",
          "Seeds withered inside the dry furrows, oxen dragged empty plows across petrified fields, and famine threatened to extinguish mankind, severing all sacrificial smoke to Olympus. Alarmed by the silence of the altars, Zeus commanded Hermes to descend into the Underworld and escort Persephone back to the sunlight.",
          "Hades feigned compliance, but before releasing Persephone, he offered her a sweet, glistening pomegranate. Unwittingly, Persephone swallowed six crimson seeds, binding herself to the Underworld by ancient metaphysical law. Thus a sacred treaty was forged: for six months each year, Persephone descends to reign as Queen of the Underworld, while Demeter mourns and the earth slumbers under autumn wind and winter frost; but when Persephone ascends to the Aegean sunlight, Demeter crowns the mortal world with golden wheat, olive blossoms, and joyful spring."
        ],
        insights: [
          { label: "Cultural Meaning", val: "The agricultural cycle, seasonal rebirth, and maternal love (Eleusinian Mysteries)" },
          { label: "Sacred Relics", val: "The Underworld Pomegranate & The Golden Sheaf of Wheat" },
          { label: "Key Figures", val: "Demeter, Persephone, Hades, Hermes, Zeus" },
          { label: "Philosophical Essence", val: "The inescapable equilibrium between mourning and rebirth, darkness and light" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#002366"/>
            <!-- Parian Marble Fluted Pillar Borders -->
            <rect x="0" y="0" width="30" height="270" fill="#F5F5DC" opacity="0.9"/>
            <line x1="10" y1="0" x2="10" y2="270" stroke="#002366" stroke-width="2"/>
            <line x1="20" y1="0" x2="20" y2="270" stroke="#002366" stroke-width="2"/>
            <rect x="770" y="0" width="30" height="270" fill="#F5F5DC" opacity="0.9"/>
            <line x1="780" y1="0" x2="780" y2="270" stroke="#002366" stroke-width="2"/>
            <line x1="790" y1="0" x2="790" y2="270" stroke="#002366" stroke-width="2"/>
            <!-- Split Harvest Earth and Underworld Abyss -->
            <path d="M30 270 L380 270 L380 0 L30 0 Z" fill="#1C1810"/>
            <!-- Golden Wheat on Harvest Side -->
            <g stroke="#D4AF37" stroke-width="2" opacity="0.85">
              <line x1="120" y1="270" x2="140" y2="150"/><circle cx="140" cy="150" r="6" fill="#D4AF37"/>
              <line x1="170" y1="270" x2="190" y2="135"/><circle cx="190" cy="135" r="6" fill="#D4AF37"/>
              <line x1="220" y1="270" x2="230" y2="160"/><circle cx="230" cy="160" r="6" fill="#D4AF37"/>
            </g>
            <!-- Aegean Wave Pulse -->
            <g class="wave-pulse">
              <path d="M380 220 Q480 190 580 220 T770 220 L770 270 L380 270 Z" fill="#007799" opacity="0.85"/>
            </g>
            <!-- Glowing Pomegranate with Six Seeds on Right -->
            <g transform="translate(580, 125)" style="animation: lotusBloom 3.5s infinite ease-in-out;">
              <circle cx="0" cy="0" r="36" fill="#B81D24"/>
              <circle cx="-10" cy="-8" r="5" fill="#F5F5DC"/>
              <circle cx="10" cy="-8" r="5" fill="#F5F5DC"/>
              <circle cx="-12" cy="10" r="5" fill="#F5F5DC"/>
              <circle cx="12" cy="10" r="5" fill="#F5F5DC"/>
              <circle cx="0" cy="-16" r="5" fill="#F5F5DC"/>
              <circle cx="0" cy="16" r="5" fill="#F5F5DC"/>
            </g>
          </svg>`
      },
      {
        id: "daedalus_icarus",
        subTitle: "Daedalus and Icarus",
        title: "Daedalus and Icarus: The Flight of Feathers, Melting Wax, and the Aegean Sky",
        readingTime: "✦ 4 min read",
        quote: "Fly neither too low lest the sea dampen thy feathers, nor too high lest the sun melt thy ambition.",
        image: {
          url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
          caption: "Ancient Cliffs of Crete overlooking the Azure Aegean Waters",
          source: "Archaeological Museum of Heraklion",
          motion: "kenburns-pan-left"
        },
        text: [
          "In Greek moral folklore and heroic myth, the line separating mortal ingenuity from hubristic folly is narrow and perilous. Imprisoned inside a seaside tower on Crete after constructing the intricate labyrinth of the Minotaur, the master inventor Daedalus realized that escape by sea was impossible, for King Minos guarded every port and galley with iron discipline. 'Minos may hold sway over land and wave,' Daedalus whispered to his young son Icarus, 'yet the boundless sky remains free.'",
          "Daedalus gathered thousands of feathers discarded by seabirds along the cliffs, organizing them from smallest to longest. He secured their bases with linen thread and molded them with heated beeswax, curving them into the wingspan of an eagle. Fastening the wings to his son's shoulders, Daedalus wept with parental apprehension, commanding: 'Keep the middle course. Fly too low, and ocean brine will weigh down your feathers; fly too high, and Apollo's solar fire will melt the wax.'",
          "Leaping into the sea winds, father and son soared over Samos, Delos, and Lebynthos, while shepherds and fishermen beneath them fell to their knees, believing they were witnessing gods. But intoxicated by the exhilarating ecstasy of flight, young Icarus abandoned his father's counsel and climbed toward the radiant heavens.",
          "The blistering solar rays swiftly dissolved the beeswax, causing feathers to peel away into the wind like autumn leaves. Despite beating his bare arms desperately against the empty sky, Icarus plummeted into the deep sapphire sea that bears his name forever, a poignant Greek cautionary tale on the tragic price of unrestrained mortal pride."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Human ambition, architectural genius, and the golden mean (Sophrosyne)" },
          { label: "Sacred Relics", val: "The Wings of Wax & Feathers and the Cretan Labyrinth" },
          { label: "Key Figures", val: "Daedalus, Icarus, King Minos, Apollo" },
          { label: "Philosophical Essence", val: "Ambition disciplined by moderation; respecting mortal boundaries beneath the gods" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#002366"/>
            <!-- Fluted Border Columns -->
            <rect x="0" y="0" width="24" height="270" fill="#F5F5DC" opacity="0.9"/>
            <rect x="776" y="0" width="24" height="270" fill="#F5F5DC" opacity="0.9"/>
            <!-- Blazing Sun of Apollo -->
            <circle cx="400" cy="50" r="38" fill="#D4AF37" opacity="0.95" style="animation: pulseSun 4s infinite ease-in-out;"/>
            <!-- Aegean Waves with Wave Pulse -->
            <g class="wave-pulse">
              <path d="M24 220 Q200 190 400 220 T776 220 L776 270 L24 270 Z" fill="#007799" opacity="0.85"/>
            </g>
            <!-- Falling Feathers Drift -->
            <g fill="#F5F5DC" opacity="0.85">
              <path d="M340 100 C345 115 350 120 342 130 C338 120 335 110 340 100 Z" style="animation: featherDrift 4s infinite linear;"/>
              <path d="M460 120 C465 135 470 140 462 150 C458 140 455 130 460 120 Z" style="animation: featherDrift 5s infinite linear;"/>
            </g>
          </svg>`
      }
    ]
  },
  egyptian: {
    name: "Egyptian",
    cultureTag: "Egyptian • Pyramid Gold, Lapis Lazuli & The Sacred Nile",
    glowClass: "glow-egyptian",
    pantheonId: "egyptian",
    stories: [
      {
        id: "osiris_myth",
        subTitle: "The Osiris Myth",
        title: "The Osiris Myth: Betrayal, Resurrection & The Lord of the Underworld",
        readingTime: "✦ 4 min read",
        quote: "Though malice scatter my flesh to the fourteen corners of Khem, righteous love shall gather what tyranny tore asunder.",
        image: {
          url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
          caption: "Temple Reliefs of Abydos, Ancient Cult Center of Osiris",
          source: "Egyptian Antiquities Ministry",
          motion: "kenburns-zoom"
        },
        text: [
          "In the fertile river valley of the Nile, Egyptian civilization evolved around the dependable seasonal inundation and the cosmic principle of Ma'at—divine truth, balance, and order. Osiris, the wise and benevolent king, taught mortals agriculture, law, and reverence for the netherworld. But his jealous brother Set, embodying the chaotic desert sands, plotted his downfall. Set secretly measured Osiris's sleeping body and built a dazzling chest of Lebanese cedar, inlaid with gold, lapis lazuli, and turquoise.",
          "At a royal banquet, Set jovially promised the luxurious coffer to whoever fit perfectly within. When Osiris stepped inside, Set and his conspirators slammed the lid shut, hammered bronze nails, and poured boiling molten lead over the seams before casting the chest into the rushing Nile.",
          "The casket drifted to Byblos, where a fragrant tamarisk tree encased it. His devoted wife Isis tracked down the coffin and returned it to the papyrus marshes of the Delta. But Set discovered the body while hunting by moonlight; in a furious rage, he tore Osiris into fourteen pieces and scattered them across the realm.",
          "Undeterred by grief, Isis and Nephthys traversed every canal in a papyrus skiff, recovering thirteen fragments. With Anubis and Thoth, Isis performed the sacred first mummification rites. Beating her wings as a divine kite-hawk over Osiris's heart, she rekindled breath just long enough to conceive their royal heir, Horus, destined to defeat Set. Restored to spiritual wholeness, Osiris descended into the Duat to reign forever as Lord of the Underworld and Supreme Judge, weighing each mortal heart against the feather of Ma'at."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Resurrection, the annual Nile flood, and eternal justice (Ma'at)" },
          { label: "Sacred Relics", val: "The Sealed Coffin, Golden Ankh of Life & Scales of Ma'at" },
          { label: "Key Deities", val: "Osiris, Isis, Set, Horus, Anubis" },
          { label: "Philosophical Essence", val: "Righteous love and spiritual integrity triumphing over chaos and dismemberment" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="eg-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00A896"/><stop offset="100%" stop-color="#08101E"/>
              </linearGradient>
            </defs>
            <rect width="800" height="270" fill="url(#eg-sky)"/>
            <!-- Hieroglyphic Border Outset Motif -->
            <rect x="12" y="12" width="776" height="246" fill="none" stroke="#E5A823" stroke-width="2" stroke-dasharray="8,6" opacity="0.7"/>
            <!-- Animated Sun of Ra & Golden Pulse -->
            <g class="golden-pulse">
              <circle cx="400" cy="80" r="44" fill="#E5A823"/>
              <circle cx="400" cy="80" r="58" fill="none" stroke="#00A896" stroke-width="2" opacity="0.6"/>
            </g>
            <!-- Nile Water Undulation -->
            <path d="M0 210 C200 180 400 230 800 195 L800 270 L0 270 Z" fill="#0F2042" opacity="0.95" style="animation: waveUndulate 3s infinite ease-in-out;"/>
            <!-- Floating Solar Barque -->
            <g transform="translate(400, 155)" style="animation: floatBoat 4s infinite ease-in-out;">
              <path d="M-65 20 Q-20 42 0 42 Q20 42 65 20 Q45 28 0 28 Q-45 28 -65 20 Z" fill="#E5A823"/>
              <rect x="-18" y="0" width="36" height="24" rx="2" fill="#00A896"/>
              <circle cx="0" cy="6" r="4" fill="none" stroke="#F5F2EB" stroke-width="1.8"/>
              <line x1="0" y1="10" x2="0" y2="18" stroke="#F5F2EB" stroke-width="1.8"/>
              <line x1="-5" y1="13" x2="5" y2="13" stroke="#F5F2EB" stroke-width="1.8"/>
            </g>
          </svg>`
      },
      {
        id: "destruction_mankind",
        subTitle: "The Destruction of Mankind",
        title: "The Destruction of Mankind: The Wrath of Sekhmet & The Crimson Beer",
        readingTime: "✦ 4 min read",
        quote: "In her fierce bloodlust the Lioness knew neither king nor peasant, until the crimson lake quenched the wrath of the heavens.",
        image: {
          url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
          caption: "Granite Sanctuary of the Lioness Goddess Sekhmet, Karnak",
          source: "Metropolitan Museum of Art Collection",
          motion: "kenburns-pan-left"
        },
        text: [
          "As the primordial sun god Ra aged upon his earthly throne, his bones turned to silver, his flesh to gold, and his hair to pure lapis lazuli. Sensing his physical decline, mortals began plotting rebellion in the desert shadow. Angered by human ingratitude, Ra convened his divine council—Shu, Tefnut, Geb, Nut, and Nun—who counseled him to unleash his searing Eye against the rebels.",
          "Hathor transformed into the bloodthirsty lioness Sekhmet, the Lady of Slaughter. Descending into the Nile Valley, she slaughtered rebels and innocents alike until the river sands turned red. When Ra witnessed humanity brought to the brink of extinction, his heart softened with grief, but Sekhmet was so drunk with bloodlust that she roared with delight, refusing to halt.",
          "Knowing force could not overcome the lioness, Ra ordered swift messengers to Elephantine to harvest red ochre, commanding the high priests of Heliopolis to brew seven thousand jars of barley beer dyed blood-red. Under cover of night, Ra flooded the fields with the crimson elixir.",
          "At dawn, Sekhmet returned to resume her feast. Enchanted by the mirror of red, she drank greedily until the intoxicating beer induced deep, peaceful slumber. She awoke purred into gentle Hathor, and humanity was spared to greet another dawn under the golden sun of Ra."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Divine wrath, balance of mercy, and the dual nature of power" },
          { label: "Sacred Relics", val: "The Eye of Ra & The Seven Thousand Crimson Jars" },
          { label: "Key Deities", val: "Ra, Hathor, Sekhmet, Nun" },
          { label: "Philosophical Essence", val: "Wisdom and compassion tempering righteous wrath to preserve mortal life" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#1C0608"/>
            <!-- Hieroglyphic Frame -->
            <rect x="12" y="12" width="776" height="246" fill="none" stroke="#E5A823" stroke-width="2" stroke-dasharray="6,6" opacity="0.65"/>
            <!-- Golden Pulse of Ra's Eye -->
            <g class="golden-pulse">
              <circle cx="400" cy="70" r="45" fill="#E5A823"/>
              <circle cx="400" cy="70" r="60" fill="none" stroke="#00A896" stroke-width="2" opacity="0.6"/>
            </g>
            <!-- Crimson Beer Flooding the Sands -->
            <path d="M0 200 C200 170 400 230 800 190 L800 270 L0 270 Z" fill="#B81D24" opacity="0.9" style="animation: waveUndulate 3s infinite ease-in-out;"/>
            <!-- Sekhmet Lioness Silhouette -->
            <g transform="translate(400, 160)" fill="#111111">
              <ellipse cx="0" cy="0" rx="36" ry="16"/>
              <circle cx="30" cy="-14" r="14"/>
              <polygon points="26,-26 34,-32 38,-24"/>
              <line x1="-30" y1="5" x2="-55" y2="-10" stroke="#111111" stroke-width="4"/>
            </g>
          </svg>`
      }
    ]
  },
  norse: {
    name: "Norse",
    cultureTag: "Norse • Glacial Teal & Ancient Runic Slate",
    glowClass: "glow-norse",
    pantheonId: "norse",
    stories: [
      {
        id: "idunn_apples",
        subTitle: "The Theft of Idunn's Apples",
        title: "The Theft of Idunn's Apples: The Golden Fruit of Immortality and Loki's Trickery",
        readingTime: "✦ 4 min read",
        quote: "Even the gods must wither when the golden orchard is stripped of youth and truth.",
        image: {
          url: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
          caption: "Misty Fjords and Glacial Valleys of Western Scandinavia",
          source: "Nordic Antiquities Museum, Oslo",
          motion: "kenburns-zoom"
        },
        text: [
          "In the stark, glacial landscapes of ancient Scandinavia, Norse mythology took root in an unforgiving climate of ice and sea. The Aesir gods were not inherently immortal; they preserved their vigor, beauty, and strength by eating from the wooden ash-box of golden apples tended by Idunn, goddess of spring. One day, Odin, Hoenir, and the trickster Loki were journeying through desolate crags when the storm giant Thjazi, disguised as a gigantic eagle, ambushed them.",
          "Loki struck the eagle with a staff, but the weapon stuck to Thjazi's talons, dragging Loki through jagged peaks until he swore a binding oath to lure Idunn and her fruit outside Asgard's protective walls. Returning to the divine citadel, Loki lied to Idunn that he had discovered even more wondrous apples in the mortal forest.",
          "The moment Idunn crossed Asgard's threshold, Thjazi swooped down, grasped her in his talons, and bore her away to his freezing mountain hall of Thrymheim. Deprived of the apples, the gods aged rapidly: their joints stiffened, their hair turned to ash, and their divine power deteriorated.",
          "Cornering Loki with threats of torture, the gods forced him to borrow Freyja's falcon cloak. Flying to Thrymheim, Loki transformed Idunn into a hazelnut and flew back to Asgard. As Thjazi pursued in eagle form, the Aesir piled wood along the ramparts, igniting an inferno the moment Loki cleared the walls. Thjazi fell into the flames, Idunn was restored, and the gods rejoiced in renewed youth."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Vulnerability of divine power, seasonal transitions, and the fragility of life" },
          { label: "Sacred Relics", val: "The Golden Apples of Idunn & Freyja's Falcon Cloak" },
          { label: "Key Figures", val: "Idunn, Loki, Giant Thjazi, Odin, Freyja" },
          { label: "Philosophical Essence", val: "Youth, integrity, and vitality require constant vigilance against deceit" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#1C2833"/>
            <!-- Runic Shimmer Glow -->
            <g class="rune-shimmer">
              <text x="70" y="70" fill="#008080" font-size="28" opacity="0.6">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</text>
              <text x="630" y="70" fill="#008080" font-size="28" opacity="0.6">ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ</text>
            </g>
            <!-- Snow Particle Overlay Drift -->
            <g class="snow-overlay" fill="#F5F2EB" opacity="0.8">
              <circle cx="150" cy="20" r="3"/>
              <circle cx="320" cy="50" r="2"/>
              <circle cx="580" cy="30" r="3.5"/>
              <circle cx="700" cy="60" r="2"/>
            </g>
            <!-- Golden Apple of Idunn with Teal Aurora -->
            <g transform="translate(400, 115)">
              <circle cx="0" cy="0" r="34" fill="#008080" opacity="0.9"/>
              <circle cx="0" cy="0" r="22" fill="#E5A823"/>
              <path d="M0 -22 Q5 -32 15 -30" stroke="#00E5FF" stroke-width="3" fill="none"/>
            </g>
            <!-- Eagle Thjazi Silhouette -->
            <g transform="translate(400, 45)" fill="#8E9AAF" opacity="0.75" style="animation: floatBoat 3s infinite ease-in-out;">
              <polygon points="0,-10 -60,-25 -20,-5 0,0 20,-5 60,-25"/>
            </g>
          </svg>`
      },
      {
        id: "binding_fenrir",
        subTitle: "The Binding of Fenrir",
        title: "The Binding of Fenrir: Tyr's Honor and the Unbreakable Ribbon Gleipnir",
        readingTime: "✦ 4 min read",
        quote: "True courage is not the absence of fear, but placing thy hand in the beast's maw for the peace of the world.",
        image: {
          url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
          caption: "Glacial Highlands and Runic Megaliths of the Far North",
          source: "National Museum of Denmark",
          motion: "kenburns-pan-left"
        },
        text: [
          "Among the monstrous offspring of Loki and Angrboda was Fenrir, a wolf whose ferocious size grew with alarming speed. Raised in Asgard, only Tyr, god of valor and lawful oaths, possessed the courage to feed the snarling beast. When prophecy revealed that Fenrir would devour Odin at Ragnarök, the Aesir determined that he had to be bound.",
          "Twice the gods challenged Fenrir to tests of strength with massive iron chains—Leyding and Dromi—both of which the wolf shattered effortlessly. In desperation, Odin sent Skirnir to Svartalfheim, where the dark elves forged Gleipnir from six impossible ingredients: a cat's footfall, a woman's beard, mountain roots, bear sinews, fish breath, and bird spittle.",
          "Smooth as silk ribbon, Gleipnir was brought to Fenrir on the lonely isle of Lyngvi. Suspecting deceit in so delicate a cord, the wolf agreed to be bound only if a god placed a hand in his jaws as a pledge of honor.",
          "While the other gods froze in dread, Tyr stepped forward without hesitation and placed his right hand in Fenrir's fanged mouth. As Gleipnir tightened like tempered steel, Fenrir bit off Tyr's hand. The wolf was tethered until the end of time, while Tyr stood unbroken, having paid the sacrificial price of cosmic peace."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Honor, oath-keeping, and the tragic inevitability of fate" },
          { label: "Sacred Relics", val: "Gleipnir (The Silken Ribbon) & The Sword of Lyngvi" },
          { label: "Key Figures", val: "Tyr, Fenrir, Odin, Dark Elven Craftsmen" },
          { label: "Philosophical Essence", val: "Selfless sacrifice for the collective good, knowing duty demands a price" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#1C2833"/>
            <!-- Runic Mountain Silhouette -->
            <polygon points="0,270 200,120 400,200 600,110 800,270" fill="#008080" opacity="0.35"/>
            <!-- Rune Shimmer -->
            <g class="rune-shimmer">
              <text x="350" y="60" fill="#00E5FF" font-size="24" opacity="0.7">ᛏ ᛉ ᛋ ᛒ ᛖ ᛗ</text>
            </g>
            <!-- Glowing Gleipnir Ribbon -->
            <path d="M220 180 C320 130 480 210 580 160" stroke="#008080" stroke-width="4" fill="none" stroke-dasharray="6,6" style="animation: waveUndulate 3s infinite ease-in-out;"/>
            <!-- Tyr's Golden Sword Stance -->
            <line x1="400" y1="120" x2="400" y2="240" stroke="#F5F2EB" stroke-width="4"/>
            <line x1="380" y1="140" x2="420" y2="140" stroke="#F5F2EB" stroke-width="4"/>
          </svg>`
      }
    ]
  },
  aztec: {
    name: "Aztec",
    cultureTag: "Aztec • Quetzal Jade, Obsidian Charcoal & Solar Fire",
    glowClass: "glow-aztec",
    pantheonId: "aztec",
    stories: [
      {
        id: "fifth_sun",
        subTitle: "The Legend of the Fifth Sun",
        title: "The Legend of the Fifth Sun: Nanahuatzin's Sacrificial Leap at Teotihuacan",
        readingTime: "✦ 4 min read",
        quote: "Not in gold nor arrogant boasts does cosmic life awaken, but in the silent bravery that leaps into the sacred flame.",
        image: {
          url: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80",
          caption: "Pyramid of the Sun at Teotihuacan, Valley of Mexico",
          source: "National Institute of Anthropology and History (INAH)",
          motion: "kenburns-zoom"
        },
        text: [
          "In the high volcanic Valley of Mexico, the Mexica civilization viewed the universe as a series of cosmic ages, each created and destroyed in cataclysms. When the four prior suns collapsed, the world hung in frozen darkness. The gods gathered at the holy city of Teotihuacan around a colossal pyre, the Teotexcalli, seeking a divine volunteer to leap into the furnace and birth the Fifth Sun—Nahui Ollin, the Sun of Movement.",
          "Tecuciztecatl, wealthy and proud, volunteered readily, offering jade, quetzal plumes, and gold. In contrast, the gods summoned Nanahuatzin, an impoverished, sore-covered deity who offered green fir branches and agave thorns stained with his own blood.",
          "When the midnight pyre roared, Tecuciztecatl stepped forward but recoiled in fear four times from the scorching heat. The gods then called upon Nanahuatzin. Closing his eyes, he leaped without hesitation into the blazing inferno. Shamed by the display of courage, Tecuciztecatl threw himself into the embers behind him.",
          "From the ashes, Nanahuatzin arose in the east as Tonatiuh, the brilliant Fifth Sun, followed by Tecuciztecatl as the Moon. To set the stationary celestial bodies into motion across the sky, Quetzalcoatl and the gathered deities sacrificed their divine breath, inaugurating the cyclical dance of day, night, and human history."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Solar sacrifice, selflessness, and the sacred 260-day calendar (Tonalpohualli)" },
          { label: "Sacred Relics", val: "The Teotexcalli Pyre & The Aztec Sun Stone" },
          { label: "Key Deities", val: "Nanahuatzin (Tonatiuh), Tecuciztecatl, Quetzalcoatl" },
          { label: "Philosophical Essence", val: "True nobility and cosmic movement born of humble, selfless devotion" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#2C3E50"/>
            <!-- Stepped Pyramid Frame -->
            <polygon points="200,270 280,180 520,180 600,270" fill="#111111" stroke="#00A86B" stroke-width="2"/>
            <polygon points="280,180 340,110 460,110 520,180" fill="#181818" stroke="#00A86B" stroke-width="2"/>
            <!-- Blazing Fifth Sun & Geometric Glow -->
            <circle cx="400" cy="70" r="46" fill="#00A86B" opacity="0.95" style="animation: pulseSun 4s infinite ease-in-out;"/>
            <circle cx="400" cy="70" r="30" fill="#F39C12"/>
            <g class="geometric-glow">
              <rect x="375" y="45" width="50" height="50" fill="none" stroke="#00A86B" stroke-width="2" transform="rotate(45 400 70)"/>
            </g>
            <!-- Sacrificial Flames on Pyramid Altar -->
            <g transform="translate(400, 110)" style="animation: flickerFlame 0.8s infinite ease-in-out alternate; transform-origin: 0px 5px;">
              <polygon points="-16,5 0,-24 16,5" fill="#C0392B"/>
              <polygon points="-8,5 0,-14 8,5" fill="#F39C12"/>
            </g>
          </svg>`
      },
      {
        id: "bones_humanity",
        subTitle: "Quetzalcoatl & The Bones of Humanity",
        title: "Quetzalcoatl and the Bones of Humanity: The Descent into Mictlan",
        readingTime: "✦ 4 min read",
        quote: "Into the shadow realm must wisdom journey, that the dust of ancestors may awaken with new breath.",
        image: {
          url: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80",
          caption: "Ancient Basalt Serpent Carvings of Tenochtitlan",
          source: "National Museum of Anthropology, Mexico City",
          motion: "kenburns-pan-left"
        },
        text: [
          "Following the birth of the Fifth Sun, the earth was desolate, for the people of previous cosmic suns had perished. To repopulate the world, Quetzalcoatl, the Feathered Serpent god of wisdom and wind, embarked on a perilous descent into Mictlan, the nine-layered Aztec underworld ruled by the skeletal lord Mictlantecuhtli.",
          "Reaching the lord of death, Quetzalcoatl demanded the sacred ancestral bones. Mictlantecuhtli consented only on an impossible condition: Quetzalcoatl had to travel four times around his underworld court while blowing through a conch horn that lacked finger holes. Calling upon subterranean worms to bore holes in the shell and hornets to buzz inside it, Quetzalcoatl produced a resounding note that fulfilled the test.",
          "Realizing he had been outwitted, Mictlantecuhtli ordered his underworld minions to dig a deep pit along the exit tunnel. Startled by quail, Quetzalcoatl fell into the pit, and the ancestral bones shattered into fragments of varied sizes.",
          "Escaping with the fragments to Tamoanchan, Quetzalcoatl ground the bones into fine powder. The gathered deities dripped their own vital blood onto the dust, sculpting the first men and women of the Fifth Sun. Because the bones had fractured unevenly, human beings were born in all shapes, sizes, and temperaments, forever indebted to divine grace."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Creation of mankind, mortal diversity, and debt to the gods (Macehualtin)" },
          { label: "Sacred Relics", val: "The Perforated Conch Shell & The Underworld Bones" },
          { label: "Key Figures", val: "Quetzalcoatl, Mictlantecuhtli, Underworld Quail" },
          { label: "Philosophical Essence", val: "New life created through descent into darkness and sacrificial blood" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#2C3E50"/>
            <!-- Coiling Feathered Jade Serpent -->
            <g style="animation: serpentCoil 4s infinite ease-in-out;">
              <path d="M140 220 Q240 170 340 220 T540 220 T720 200" fill="none" stroke="#00A86B" stroke-width="8" stroke-linecap="round"/>
            </g>
            <!-- Stepped Geometric Line Glow -->
            <g class="geometric-glow">
              <path d="M260 80 L300 80 L300 120 L340 120 L340 160 L380 160" fill="none" stroke="#00A86B" stroke-width="3"/>
              <path d="M540 80 L500 80 L500 120 L460 120 L460 160 L420 160" fill="none" stroke="#00A86B" stroke-width="3"/>
            </g>
            <!-- Glowing Bone Shards -->
            <g fill="#F39C12" opacity="0.85">
              <rect x="360" y="120" width="16" height="6" rx="2" transform="rotate(25 360 120)"/>
              <rect x="420" y="110" width="22" height="6" rx="2" transform="rotate(-15 420 110)"/>
              <rect x="390" y="140" width="18" height="6" rx="2" transform="rotate(45 390 140)"/>
            </g>
          </svg>`
      }
    ]
  },
  chinese: {
    name: "Chinese",
    cultureTag: "Chinese • Vermilion Red, Imperial Jade & Dragon Clouds",
    glowClass: "glow-chinese",
    pantheonId: "chinese",
    stories: [
      {
        id: "pangu_egg",
        subTitle: "Pangu and the Cosmic Egg",
        title: "Pangu and the Cosmic Egg: The Primordial Awakening & The Creation of Heaven and Earth",
        readingTime: "✦ 4 min read",
        quote: "From chaos was born the division of light and dark; through solitary sacrifice, the giant's breath became the wind and his flesh the living earth.",
        image: {
          url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
          caption: "Misty Karst Peaks and Sacred Mountains of Guilin, China",
          source: "National Palace Museum Collection",
          motion: "kenburns-zoom"
        },
        text: [
          "In the ancient Huaxia cosmology of the Yellow River basin, before heaven and earth took shape, the cosmos was a boundless, formless void of murky chaos known as Hundun, shaped like a colossal black egg. Within this cosmic womb slept Pangu, the primordial giant, gestating for eighteen thousand years as the complementary forces of Yin (dark, heavy, receptive) and Yang (bright, light, active) slowly crystallized around him.",
          "Awakening from his eons-long slumber, Pangu found only suffocating pitch-blackness. Reaching into the primordial mists, he summoned a massive divine axe and struck the shell with all his might. With a deafening crack that shook the void, the cosmic egg shattered: the clear, luminous Yang rose up to form the boundless Heavens, while the murky, turbid Yin sank downward to solidify as the Earth. Fearing the two halves would collapse and merge back into chaotic nothingness, Pangu stood between them, his head supporting the celestial vault and his feet planted firmly upon the terrestrial crust.",
          "For eighteen thousand more years, Pangu held heaven and earth apart. Each day the heavens rose ten feet higher, the earth grew ten feet thicker, and Pangu grew ten feet taller to bridge the expanding gulf. When the celestial order was at last immovable and eternally secure, the exhausted creator fell upon the ground, surrendering his mortal form in supreme self-sacrifice.",
          "In his dying breath, Pangu's body was transformed to nourish the cosmos: his left eye became the radiant Sun, his right eye the silver Moon, his breath the sweeping winds and soaring storm clouds, his voice the rolling thunder, his blood the Yellow River and the Yangtze, his sinews the winding mountain passes, his flesh the fertile agricultural soil, his hair the twinkling stars, and his marrow the sacred white jade. This foundational myth established the enduring Chinese philosophical worldview: that humanity exists in an eternal debt of gratitude to cosmic sacrifice, that heaven, earth, and mankind form a singular sacred triad, and that balance (Taiji) must forever be maintained between light and shadow."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Cosmic balance of Yin and Yang, heroic self-sacrifice, and the creation triad (Tian, Di, Ren)" },
          { label: "Sacred Relics", val: "The Primordial Axe of Pangu & The Cosmic Egg Shell" },
          { label: "Key Figures", val: "Pangu (The Primordial Giant), Yin & Yang, Hundun (Chaos)" },
          { label: "Philosophical Essence", val: "Order forged from chaos through patient endurance and unconditional selfless devotion to the world" }
        ],
        illustrationSvg: `<svg class="illustration-svg scroll-unfold" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="zh-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1A0508"/><stop offset="50%" stop-color="#D90429"/><stop offset="100%" stop-color="#2B0A10"/>
              </linearGradient>
              <radialGradient id="zh-sun" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FFD166"/><stop offset="60%" stop-color="#E5A93B"/><stop offset="100%" stop-color="#D90429"/>
              </radialGradient>
            </defs>
            <rect width="800" height="270" fill="url(#zh-sky)"/>
            <!-- Radiant Cosmic Sun of Pangu's Eye -->
            <circle cx="400" cy="70" r="42" fill="url(#zh-sun)" style="animation: pulseSun 4s infinite ease-in-out;"/>
            <!-- Yin & Yang Primordial Clouds Floating -->
            <g class="dragon-float" opacity="0.85">
              <path d="M120 80 Q160 50 200 80 Q240 60 270 90 Q220 110 160 100 Z" fill="#00A86B" opacity="0.6"/>
              <path d="M530 85 Q570 55 610 85 Q650 65 680 95 Q630 115 570 105 Z" fill="#00A86B" opacity="0.6"/>
            </g>
            <!-- Silhouette of Pangu Uplifting Heaven -->
            <g transform="translate(400, 160)">
              <path d="M-180 -70 Q0 -110 180 -70" stroke="#FFD166" stroke-width="4" fill="none" opacity="0.8"/>
              <polygon points="-350,110 -200,20 -50,110" fill="#140608"/>
              <polygon points="-120,110 0,-10 120,110" fill="#0A0304"/>
              <polygon points="50,110 200,20 350,110" fill="#140608"/>
              <path d="M-400 100 Q-200 60 0 100 T400 100" stroke="#00A86B" stroke-width="5" fill="none" opacity="0.8"/>
            </g>
          </svg>`
      },
      {
        id: "nuwa_mends_sky",
        subTitle: "Nüwa Mends the Sky",
        title: "Nüwa Mends the Heavens: The Five-Colored Stones & The Creation of Humanity",
        readingTime: "✦ 4 min read",
        quote: "When heaven cracked and fierce waters drowned the valleys, the mother of humankind gathered river jewels to mend the broken stars.",
        image: {
          url: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=1200&q=80",
          caption: "Ancient Taoist Temple Pavilions atop Mount Huashan, China",
          source: "Shaanxi Cultural Heritage Administration",
          motion: "kenburns-pan-left"
        },
        text: [
          "In the earliest days of the world, before cities arose along the Central Plains, the mother goddess Nüwa, who possessed the body of a serpent and the head of a radiant woman, roamed the vast valleys alone. Though mountains and rivers stretched in majestic beauty, the world was silent and devoid of thought. Kneeling beside the Yellow River, Nüwa scooped handfuls of fertile golden clay and lovingly sculpted small figurines in her own image, endowing each with breath and laughter. As her fingers grew tired, she dipped a reed rope into the river mud and swung it through the air, sending droplets of earth showering across the fields, each instantly springing to life as mortal men and women.",
          "Centuries later, a cataclysmic battle erupted between Gonggong, the ferocious god of water, and Zhurong, the righteous god of fire. Defeated and humiliated, Gonggong in a blind rage rammed his colossal horns into Mount Buzhou, the great pillar supporting the northwestern corner of the heavens. Mount Buzhou collapsed with a cosmic roar: the celestial dome tore open, the earth split into fathomless abysses, forest fires scorched the plains, and subterranean floods inundated the dwellings of mortals. Ferocious dragons and avian beasts emerged from the rifts to prey upon the defenseless children of Nüwa.",
          "Weeping for the suffering of humanity, Nüwa resolved to save her creation. She traversed every riverbed across the realm, gathering stones of five celestial colors: red for fire, yellow for earth, white for metal, black for water, and green-blue for wood. Melting the sacred stones in a colossal crucible of cosmic reed fire for nine days and nine nights, she forged a luminous, multi-hued paste and soared into the sky, carefully patching each fracture in the celestial vault until the sky was smooth and the rain ceased.",
          "To ensure the dome would never again collapse, Nüwa severed the four sturdy legs of the colossal cosmic sea tortoise Ao and planted them firmly at the four cardinal directions as eternal pillars of the cosmos. She slew the rampaging black dragon of the Ji Province and dammed the inundating waters with the ashes of burnt river reeds. Through her boundless maternal courage and tireless perseverance, sunlight returned, the seasons regained their gentle rhythm, and humanity was preserved to pass down the sacred duty of harmony and filial reverence across ten thousand generations."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Maternal protection, five-element cosmic theory (Wu Xing), and restorative resilience" },
          { label: "Sacred Relics", val: "The Five-Colored Celestial Stones & The Four Tortoise Pillars (Ao)" },
          { label: "Key Figures", val: "Goddess Nüwa, Gonggong (Water God), Zhurong (Fire God), The Cosmic Tortoise Ao" },
          { label: "Philosophical Essence", val: "Restoring broken harmony through compassion, balance of the five elemental forces, and selfless preservation" }
        ],
        illustrationSvg: `<svg class="illustration-svg scroll-unfold" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="nw-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0A0003"/><stop offset="60%" stop-color="#20060B"/><stop offset="100%" stop-color="#0A1810"/>
              </linearGradient>
            </defs>
            <rect width="800" height="270" fill="url(#nw-sky)"/>
            <!-- Celestial Crack in Heavens -->
            <path d="M250 20 L340 60 L460 30 L550 70" stroke="#FFD166" stroke-width="3" stroke-dasharray="6,4" fill="none" opacity="0.6"/>
            <!-- Five-Colored Glowing Stones of Nüwa -->
            <g transform="translate(400, 65)">
              <circle cx="-50" cy="0" r="14" fill="#D90429" style="animation: lotusBloom 3s infinite ease-in-out;"/>
              <circle cx="-25" cy="-20" r="14" fill="#FFD166" style="animation: lotusBloom 3.5s infinite ease-in-out;"/>
              <circle cx="0" cy="5" r="16" fill="#00A86B" style="animation: lotusBloom 4s infinite ease-in-out;"/>
              <circle cx="25" cy="-20" r="14" fill="#002366" style="animation: lotusBloom 3.2s infinite ease-in-out;"/>
              <circle cx="50" cy="0" r="14" fill="#F5F2EB" style="animation: lotusBloom 3.8s infinite ease-in-out;"/>
            </g>
            <!-- Sacred Rainbow Beams Mending the Heavens -->
            <path d="M350 70 L200 200 M400 70 L400 210 M450 70 L600 200" stroke="#00A86B" stroke-width="2" opacity="0.4"/>
            <!-- Coiling Mother Serpent Silhouette of Nüwa -->
            <g transform="translate(400, 180)" class="dragon-float">
              <path d="M-120 60 Q-60 10 0 40 Q60 70 120 30" fill="none" stroke="#D90429" stroke-width="8" stroke-linecap="round"/>
              <circle cx="0" cy="15" r="22" fill="#E5A823" opacity="0.9"/>
            </g>
          </svg>`
      }
    ]
  },
  japanese: {
    name: "Japanese",
    cultureTag: "Japanese • Sakura Blossom Pink & Deep Sumi Ink",
    glowClass: "glow-japanese",
    pantheonId: "japanese",
    stories: [
      {
        id: "momotaro",
        subTitle: "Momotaro (The Peach Boy)",
        title: "Momotaro (The Peach Boy): The Demons of Onigashima Island",
        readingTime: "✦ 4 min read",
        quote: "A shared dumpling creates a bond stronger than steel, uniting forest and sky against cruelty.",
        image: {
          url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
          caption: "Historic River Valleys and Cherry Orchards of Okayama, Japan",
          source: "Japan National Tourism Archive",
          motion: "kenburns-zoom"
        },
        text: [
          "In the ancient islands of Japan, Shinto folklore and mythology were shaped by deep reverence for Kami—the sacred spirits dwelling within rivers, mountains, and trees. In a tranquil mountain village, an elderly couple lived virtuous lives. One morning while the old woman was washing by the river, a colossal peach—bobbing with an ethereal pink glow—drifted down the currents. When the woodcutter prepared to cut it open, the peach split apart cleanly, revealing a cheerful baby boy sent by the gods.",
          "Named Momotaro ('Peach Boy'), he grew into a youth of superhuman strength and gentle filial devotion. When horned Oni (demons) from Onigashima island began pillaging coastal villages, Momotaro resolved to defend his homeland. His parents blessed his quest, preparing an iron war-banner and delicious millet dumplings (kibi-dango).",
          "Along the mountain pass, Momotaro met a dog, a monkey, and a pheasant. To each hungry creature, Momotaro shared half of a dumpling, winning their unwavering loyalty. United by this covenant of hospitality, the four sailed toward Onigashima.",
          "At the demon fortress, the pheasant scouted the ramparts, the monkey unlocked the gates, and Momotaro charged with the hound. Together, they defeated the demon guards and confronted king Ura, compelling him to surrender all stolen treasures and pledge peace to the realm."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Filial piety, shared dumplings, loyalty, and brave camaraderie" },
          { label: "Sacred Relics", val: "The Giant River Peach & Kibi-Dango (Millet Dumplings)" },
          { label: "Key Figures", val: "Momotaro, The Elderly Couple, Dog, Monkey, Pheasant, Demon King Ura" },
          { label: "Philosophical Essence", val: "Generosity and shared nourishment uniting diverse allies to triumph over cruelty" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#111111"/>
            <!-- River Waves -->
            <path d="M0 210 Q200 180 400 210 T800 210 L800 270 L0 270 Z" fill="#1D2D44" opacity="0.85" style="animation: waveUndulate 3s infinite ease-in-out;"/>
            <!-- Giant Floating Peach -->
            <g transform="translate(400, 150)" style="animation: floatBoat 4s infinite ease-in-out;">
              <path d="M0 -30 C-30 -50 -50 0 0 35 C50 0 30 -50 0 -30 Z" fill="#FFB7C5" stroke="#D63031" stroke-width="2"/>
              <path d="M-10 -30 Q0 -45 10 -30" stroke="#27AE60" stroke-width="3" fill="none"/>
            </g>
            <!-- Falling Sakura Petals Drift -->
            <g class="petal-drift" fill="#FFB7C5" opacity="0.9">
              <circle cx="180" cy="50" r="4"/>
              <circle cx="340" cy="30" r="3.5"/>
              <circle cx="620" cy="40" r="4"/>
            </g>
          </svg>`
      },
      {
        id: "bamboo_cutter",
        subTitle: "The Tale of the Bamboo Cutter",
        title: "The Tale of the Bamboo Cutter (Kaguya-hime): The Celestial Moon Princess",
        readingTime: "✦ 4 min read",
        quote: "My heart hath learned to love this green earth, yet the celestial moon calls her daughter home.",
        image: {
          url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
          caption: "Sagano Luminous Bamboo Forest in Arashiyama, Kyoto, Japan",
          source: "Kyoto Cultural Preservation Foundation",
          motion: "kenburns-zoom"
        },
        text: [
          "In the ancient capital of Heian-kyo, Japanese folklore celebrated the bittersweet impermanence of mortal existence, encapsulated in the concept of Mono no aware. Deep within the bamboo groves lived an old woodcutter named Taketori no Okina. One evening, he discovered a stalk shining with golden luminescence. Slicing through the internode, he found a tiny maiden no larger than his thumb, naming her Kaguya-hime.",
          "Each day the woodcutter harvested bamboo, he discovered nuggets of pure gold inside the canes. Within months, Kaguya-hime blossomed into a woman of celestial beauty. Noble suitors and even the Emperor of Japan sought her hand, but she set impossible tasks that exposed their worldly greed.",
          "As the harvest moon grew full, Kaguya-hime wept, confessing that she was an exiled princess of Tsuki no Miyako, the Moon Capital, and her kin were returning to retrieve her.",
          "On the fifteenth night of the eighth month, celestial beings descended on glowing clouds. Donning a feather robe (hagoromo) that erased earthly memories and tears, Kaguya-hime left the elixir of immortality for the Emperor and ascended into the starry heavens."
        ],
        insights: [
          { label: "Cultural Meaning", val: "Transience of mortal beauty (Mono no aware) and filial tears" },
          { label: "Sacred Relics", val: "The Celestial Feather Robe (Hagoromo) & Elixir of Immortality" },
          { label: "Key Figures", val: "Kaguya-hime, Old Bamboo Cutter Okina, The Emperor" },
          { label: "Philosophical Essence", val: "The poignant beauty of earthly attachments balanced against eternal celestial peace" }
        ],
        illustrationSvg: `<svg class="illustration-svg" viewBox="0 0 800 270" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="270" fill="#111111"/>
            <!-- Luminous Full Moon -->
            <circle cx="400" cy="60" r="42" fill="#FFB7C5" opacity="0.95" style="animation: pulseSun 4s infinite ease-in-out;"/>
            <!-- Bamboo Stalks -->
            <rect x="220" y="100" width="8" height="170" fill="#1D2D44"/>
            <rect x="250" y="80" width="10" height="190" fill="#27AE60" opacity="0.6"/>
            <rect x="550" y="80" width="10" height="190" fill="#27AE60" opacity="0.6"/>
            <rect x="580" y="100" width="8" height="170" fill="#1D2D44"/>
            <!-- Petal Drift -->
            <g class="petal-drift" fill="#FFB7C5" opacity="0.9">
              <circle cx="280" cy="40" r="3.5"/>
              <circle cx="500" cy="50" r="4"/>
            </g>
          </svg>`
      }
    ]
  }
};

// Compatibility Alias for Egyptian
CULTURAL_STORIES.egypt = CULTURAL_STORIES.egyptian;

/**
 * CULTURAL THEME MATRIX (Stories Tab & Dynamic Variable Injection)
 * Dynamically applies --primary-color, --secondary-color, --border-style, --bg-pattern
 */
const CULTURAL_THEME_MATRIX = {
  indian: {
    primaryColor: '#FF9933',
    secondaryColor: '#800020',
    borderStyle: 'solid',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.15) 0%, rgba(128, 0, 32, 0.08) 60%, transparent 100%)',
    motif: 'Mandala SVG background rotate, Glowing Diya effect'
  },
  greek: {
    primaryColor: '#002366',
    secondaryColor: '#F5F5DC',
    borderStyle: 'double',
    bgPattern: 'linear-gradient(135deg, rgba(0, 35, 102, 0.22) 0%, rgba(245, 245, 220, 0.08) 50%, transparent 100%)',
    motif: 'Fluted pillar CSS borders, subtle wave pulse'
  },
  norse: {
    primaryColor: '#008080',
    secondaryColor: '#1C2833',
    borderStyle: 'groove',
    bgPattern: 'radial-gradient(ellipse at top, rgba(0, 128, 128, 0.22) 0%, rgba(28, 40, 51, 0.9) 100%)',
    motif: 'Rune shimmer effects, CSS snow particle overlay'
  },
  egyptian: {
    primaryColor: '#E5A823',
    secondaryColor: '#00A896',
    borderStyle: 'outset',
    bgPattern: 'linear-gradient(45deg, rgba(229, 168, 35, 0.2) 0%, rgba(0, 168, 150, 0.12) 100%)',
    motif: 'Hieroglyphic border SVG pattern, golden pulse'
  },
  egypt: {
    primaryColor: '#E5A823',
    secondaryColor: '#00A896',
    borderStyle: 'outset',
    bgPattern: 'linear-gradient(45deg, rgba(229, 168, 35, 0.2) 0%, rgba(0, 168, 150, 0.12) 100%)',
    motif: 'Hieroglyphic border SVG pattern, golden pulse'
  },
  aztec: {
    primaryColor: '#00A86B',
    secondaryColor: '#2C3E50',
    borderStyle: 'ridge',
    bgPattern: 'radial-gradient(circle at top right, rgba(0, 168, 107, 0.2) 0%, rgba(44, 62, 80, 0.85) 100%)',
    motif: 'Stepped-pyramid SVG frame, geometric line glow'
  },
  japanese: {
    primaryColor: '#FFB7C5',
    secondaryColor: '#111111',
    borderStyle: 'solid',
    bgPattern: 'radial-gradient(circle at center, rgba(255, 183, 197, 0.18) 0%, rgba(17, 17, 17, 0.95) 100%)',
    motif: 'Sakura petal particle drift, brush-stroke borders'
  },
  chinese: {
    primaryColor: '#D90429',
    secondaryColor: '#00A86B',
    borderStyle: 'inset',
    bgPattern: 'radial-gradient(ellipse at bottom, rgba(217, 4, 41, 0.22) 0%, rgba(0, 168, 107, 0.1) 70%, transparent 100%)',
    motif: 'Scroll unfold animation, cloud/dragon SVG accents'
  }
};


/* ==========================================================================
   SECTION 2: WEB AUDIO API SYNTHESIZER & AMBIENT DRONE SOUNDSCAPES
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem(STORAGE_KEYS.AUDIO_MUTED) === 'true';

    // Continuous Ambient Soundscape Drone State
    this.isDronePlaying = false;
    this.droneCulture = 'egypt';
    this.dronePitch = 440;
    this.droneGain = null;
    this.droneOscs = [];
    this.droneLFO = null;
    this.droneLFOGain = null;
    this.droneFilter = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  toggle() {
    this.init();
    this.muted = !this.muted;
    localStorage.setItem(STORAGE_KEYS.AUDIO_MUTED, String(this.muted));
    if (!this.muted) this.playTone(660, 'sine', 0.15);
    return !this.muted;
  }

  // --- SHORT UI SOUND EFFECTS ---
  playTone(freq, type = 'sine', duration = 0.2, gainLevel = 0.14) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio warning:', e);
    }
  }

  playCardFlip() { this.playTone(420, 'triangle', 0.07, 0.12); }
  playMatchSuccess() {
    if (this.muted) return;
    [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.2, 0.1), i * 60));
  }
  playCorrect() {
    if (this.muted) return;
    this.playTone(587, 'sine', 0.16, 0.12);
    setTimeout(() => this.playTone(880, 'sine', 0.3, 0.14), 90);
  }
  playWrong() { if (!this.muted) this.playTone(200, 'sawtooth', 0.24, 0.08); }
  playFanfare() {
    if (this.muted) return;
    [392, 523, 659, 784, 1046, 1318].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.35, 0.12), i * 70));
  }
  playChime(freq = 520) { this.playTone(freq, 'sine', 0.18, 0.1); }

  // --- CONTINUOUS AMBIENT SOUNDSCAPE DRONES PER CULTURE ---
  startDrone(cultureKey = 'egypt', customPitch = null) {
    this.init();
    if (!this.ctx) return;
    this.stopDrone(false);

    this.droneCulture = cultureKey;
    if (customPitch) this.dronePitch = customPitch;

    const baseFreq = this.dronePitch * 0.5;

    try {
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.droneGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 1.2);
      this.droneGain.connect(this.ctx.destination);

      this.droneOscs = [];

      if (cultureKey === 'indian') {
        // Sitar / Tanpura Drone with Frequency Modulation (LFO)
        const fundamental = this.ctx.createOscillator();
        fundamental.type = 'sine';
        fundamental.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);

        const fifth = this.ctx.createOscillator();
        fifth.type = 'triangle';
        fifth.frequency.setValueAtTime(baseFreq * 1.498, this.ctx.currentTime);

        const octave = this.ctx.createOscillator();
        octave.type = 'sine';
        octave.frequency.setValueAtTime(baseFreq * 2, this.ctx.currentTime);

        this.droneLFO = this.ctx.createOscillator();
        this.droneLFOGain = this.ctx.createGain();
        this.droneLFO.frequency.setValueAtTime(0.2, this.ctx.currentTime);
        this.droneLFOGain.gain.setValueAtTime(3.2, this.ctx.currentTime);
        this.droneLFO.connect(this.droneLFOGain);
        this.droneLFOGain.connect(fundamental.frequency);
        this.droneLFO.start();

        [fundamental, fifth, octave].forEach(osc => {
          osc.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else if (cultureKey === 'greek') {
        // Resonant Olympian Lyre/Harp Harmonic Chord
        [1, 1.25, 1.5].forEach((ratio, idx) => {
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          const chordGain = this.ctx.createGain();
          chordGain.gain.setValueAtTime(idx === 0 ? 0.8 : 0.5, this.ctx.currentTime);
          osc.connect(chordGain);
          chordGain.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else if (cultureKey === 'norse') {
        // Deep Glacial Frost Tone with Low-Pass Resonance
        this.droneFilter = this.ctx.createBiquadFilter();
        this.droneFilter.type = 'lowpass';
        this.droneFilter.frequency.setValueAtTime(360, this.ctx.currentTime);
        this.droneFilter.connect(this.droneGain);

        [0.5, 0.75, 1.0].forEach(ratio => {
          const osc = this.ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          osc.connect(this.droneFilter);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else if (cultureKey === 'japanese') {
        // Pure Shakuhachi / Temple Singing Bowl Pentatonic Harmonics
        [1, 1.333, 1.5, 2].forEach((ratio, i) => {
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(1 / (i + 1.2), this.ctx.currentTime);
          osc.connect(g);
          g.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else if (cultureKey === 'aztec') {
        // Deep Ceremonial Obsidian Resonance
        [0.75, 1.125].forEach(ratio => {
          const osc = this.ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          osc.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else if (cultureKey === 'chinese') {
        // Chinese: Pentatonic Gong/Zhi Bronze Resonance
        [1, 1.25, 1.5, 2].forEach((ratio, i) => {
          const osc = this.ctx.createOscillator();
          osc.type = i === 1 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          osc.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });

      } else {
        // Egypt: Mystical Desert Open Fifth
        [1, 1.5, 2].forEach((ratio, i) => {
          const osc = this.ctx.createOscillator();
          osc.type = i === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(baseFreq * ratio, this.ctx.currentTime);
          osc.connect(this.droneGain);
          osc.start();
          this.droneOscs.push(osc);
        });
      }

      this.isDronePlaying = true;
      this.updateDroneButtons(true);
    } catch (e) {
      console.warn('Drone start error:', e);
    }
  }

  stopDrone(updateUI = true) {
    if (!this.droneGain || !this.ctx) {
      this.isDronePlaying = false;
      if (updateUI) this.updateDroneButtons(false);
      return;
    }
    try {
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
      setTimeout(() => {
        this.droneOscs.forEach(o => { try { o.stop(); o.disconnect(); } catch {} });
        this.droneOscs = [];
        if (this.droneLFO) { try { this.droneLFO.stop(); this.droneLFO.disconnect(); } catch {} this.droneLFO = null; }
        if (this.droneFilter) { try { this.droneFilter.disconnect(); } catch {} this.droneFilter = null; }
      }, 700);
    } catch (e) {
      console.warn('Drone stop error:', e);
    }
    this.isDronePlaying = false;
    if (updateUI) this.updateDroneButtons(false);
  }

  toggleDrone(cultureKey = 'egypt', customPitch = null) {
    if (this.isDronePlaying) {
      this.stopDrone();
    } else {
      this.startDrone(cultureKey, customPitch);
    }
    return this.isDronePlaying;
  }

  setDronePitch(pitchHz) {
    this.dronePitch = pitchHz;
    if (!this.isDronePlaying || !this.ctx) return;
    const baseFreq = pitchHz * 0.5;
    this.droneOscs.forEach((osc, idx) => {
      try {
        const ratio = [1, 1.5, 2, 2.5][idx % 4];
        osc.frequency.exponentialRampToValueAtTime(baseFreq * ratio, this.ctx.currentTime + 0.1);
      } catch {}
    });
  }

  updateDroneButtons(isPlaying) {
    const droneNavBtn = document.getElementById('drone-toggle');
    if (droneNavBtn) {
      droneNavBtn.classList.toggle('is-active', isPlaying);
      const text = droneNavBtn.querySelector('.drone-btn-text');
      if (text) text.textContent = isPlaying ? 'Drone Active' : 'Ambient Drone';
    }

    const custDroneBtn = document.getElementById('cust-drone-btn');
    if (custDroneBtn) {
      custDroneBtn.classList.toggle('is-active', isPlaying);
      const custText = document.getElementById('cust-drone-btn-text');
      if (custText) custText.textContent = isPlaying ? '⏹ Silence Cultural Drone' : '▶ Start Cultural Drone';
    }

    const swStatus = document.getElementById('cust-sw-status');
    if (swStatus) {
      swStatus.textContent = isPlaying ? `Active (${this.dronePitch} Hz Drone)` : 'Idle (Soundscape Off)';
      swStatus.style.color = isPlaying ? '#00E676' : 'var(--pantheon-accent)';
    }
  }

  // --- CIVILIZATION MUSICAL SCALES & CHIPTUNE MELODY SYNTHESIZER ---
  getCivilizationScale(cultureKey = 'egypt') {
    const baseTonic = 220; // A3 (220 Hz base)
    const scales = {
      // Egypt: Maqam Hijaz (1, 16/15, 5/4, 4/3, 3/2, 8/5, 9/5, 2)
      egypt: [1, 16/15, 5/4, 4/3, 3/2, 8/5, 9/5, 2],
      // Greek: Phrygian / Dorian Mode
      greek: [1, 9/8, 6/5, 4/3, 3/2, 8/5, 9/5, 2],
      // Aztec: Mesoamerican Ceremonial Minor Pentatonic
      aztec: [1, 6/5, 4/3, 3/2, 9/5, 2],
      // Norse: Nordic Lydian / Fjord Mode (raised 4th)
      norse: [1, 9/8, 5/4, 45/32, 3/2, 5/3, 15/8, 2],
      // West African: Balafon / Mandinka Pentatonic
      chinese: [1, 9/8, 5/4, 3/2, 5/3, 2],
      // Japanese: Pentatonic / Insen Scale
      japanese: [1, 9/8, 4/3, 3/2, 5/3, 2],
      // Indian: Raga Bhairavi Scale
      indian: [1, 16/15, 6/5, 4/3, 3/2, 8/5, 9/5, 2]
    };
    const ratios = scales[cultureKey] || scales.egypt;
    return ratios.map(r => baseTonic * r);
  }

  playCivilizationMelody(cultureKey = 'egypt') {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const scale = this.getCivilizationScale(cultureKey);
    const melodyPatterns = {
      egypt: [0, 1, 2, 4, 3, 2, 1, 0, 4, 7],
      greek: [0, 2, 3, 4, 6, 5, 4, 3, 2, 0],
      aztec: [0, 1, 2, 3, 4, 5, 4, 2, 1, 0],
      norse: [0, 2, 3, 4, 6, 7, 5, 4, 2, 0],
      chinese: [0, 2, 4, 3, 2, 0, 1, 3, 2, 0],
      japanese: [0, 1, 2, 3, 4, 5, 4, 2, 1, 0],
      indian: [0, 1, 2, 3, 4, 5, 6, 7, 4, 0]
    };

    const pattern = melodyPatterns[cultureKey] || melodyPatterns.egypt;
    const waveform = cultureKey === 'japanese' ? 'triangle' : (cultureKey === 'norse' ? 'sawtooth' : 'sine');

    pattern.forEach((noteIdx, step) => {
      setTimeout(() => {
        const freq = scale[noteIdx % scale.length];
        this.playTone(freq, waveform, 0.28, 0.16);
      }, step * 190);
    });
  }

  playArtifactChime(cultureKey = 'egypt') {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const scale = this.getCivilizationScale(cultureKey);
    const chords = [scale[0], scale[2] || scale[1], scale[4] || scale[3], scale[scale.length - 1]];
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.45, 0.14);
      }, idx * 80);
    });
  }
}

const audio = new SoundEngine();


/* ==========================================================================
   SECTION 3: CANVAS-BASED TRADITION PARTICLE ENGINE
   ========================================================================== */
class ParticleEngine {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isPreview = options.isPreview || false;
    this.tradition = options.tradition || 'egypt';
    this.density = options.density || (this.isPreview ? 55 : 75);
    this.glow = options.glow !== undefined ? options.glow : 0.75;
    this.particles = [];
    this.w = 0;
    this.h = 0;
    this.animId = null;
    this.lastTime = performance.now();

    this.resize();
    this.initParticles();
    this.bind();
    this.start();
  }

  resize() {
    if (!this.canvas) return;
    if (this.isPreview) {
      this.w = this.canvas.width = this.canvas.clientWidth || 460;
      this.h = this.canvas.height = this.canvas.clientHeight || 300;
    } else {
      this.w = this.canvas.width = window.innerWidth;
      this.h = this.canvas.height = window.innerHeight;
    }
  }

  bind() {
    if (!this.isPreview) {
      window.addEventListener('resize', () => {
        this.resize();
        this.initParticles();
      });
    }
  }

  setTradition(traditionKey) {
    if (this.tradition === traditionKey) return;
    // Smooth cross-fade transition: fade out old particles while introducing new tradition
    this.particles.forEach(p => { p.fadingOut = true; });
    this.tradition = traditionKey;
    const newBatch = Array.from({ length: this.density }, () => {
      const np = this.createParticle();
      np.alpha = 0;
      np.fadingIn = true;
      return np;
    });
    this.particles.push(...newBatch);
  }

  setDensity(count) {
    this.density = count;
    this.initParticles();
  }

  setGlow(glowVal) {
    this.glow = glowVal;
  }

  initParticles() {
    if (!this.w || !this.h) this.resize();
    const count = this.density;
    this.particles = Array.from({ length: count }, () => this.createParticle());
  }

  createParticle(fromEdge = false) {
    const t = this.tradition;
    let x = Math.random() * (this.w || 800);
    let y = Math.random() * (this.h || 600);
    let vx = (Math.random() - 0.5) * 0.4;
    let vy = - (Math.random() * 0.5 + 0.2);
    let size = Math.random() * 2 + 1;
    let alpha = Math.random() * 0.5 + 0.3;
    let rot = Math.random() * Math.PI * 2;
    let vRot = (Math.random() - 0.5) * 0.03;
    let color = '#E5A93B';

    if (t === 'egypt') {
      // Egypt: Primary Gold (#E5A93B), Nile Lapis (#0F2042), Royal Crimson (#B81D24), Sandstone Parchment (#F5F2EB)
      y = fromEdge ? this.h + 10 : Math.random() * this.h;
      vy = - (Math.random() * 0.65 + 0.25);
      vx = (Math.random() - 0.5) * 0.35;
      size = Math.random() * 2.6 + 0.9;
      const palette = ['#E5A93B', '#0F2042', '#B81D24', '#F5F2EB'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'norse') {
      // Norse: Glacial Ice Blue (#4A90E2), Aurora Teal (#00E5FF), Midnight Frost (#0B132B), Runic Steel (#8E9AAF)
      y = fromEdge ? -10 : Math.random() * this.h;
      vy = Math.random() * 0.55 + 0.25;
      vx = Math.sin(Math.random() * 10) * 0.35;
      size = Math.random() * 3.4 + 1.4;
      const palette = ['#4A90E2', '#00E5FF', '#0B132B', '#8E9AAF'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'japanese') {
      // Japanese: Sakura Blossom Pink (#FFB7C5), Crimson Torii (#D63031), Charcoal Ink (#2D3436), Bamboo Green (#27AE60)
      y = fromEdge ? -10 : Math.random() * this.h;
      vy = Math.random() * 0.45 + 0.22;
      vx = Math.random() * 0.45 + 0.18;
      size = Math.random() * 3.6 + 1.8;
      vRot = (Math.random() - 0.5) * 0.035;
      const palette = ['#FFB7C5', '#D63031', '#2D3436', '#27AE60'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'indian') {
      // Indian: Sacred Saffron (#FF9933), Peacock Teal (#008080), Temple Gold (#E5A93B), Lotus Magenta (#C71585)
      vy = (Math.random() - 0.5) * 0.35;
      vx = (Math.random() - 0.5) * 0.35;
      size = Math.random() * 2.8 + 1.2;
      const palette = ['#FF9933', '#008080', '#E5A93B', '#C71585'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'greek') {
      // Greek: Aegean Azure (#007799), Olympic Gold (#D4AF37), White Pentelic Marble (#F0F4F8), Laurel Green (#2D5A27)
      vy = (Math.random() - 0.5) * 0.25;
      vx = Math.random() * 0.45 + 0.15;
      size = Math.random() * 2.6 + 1.1;
      const palette = ['#007799', '#D4AF37', '#F0F4F8', '#2D5A27'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'aztec') {
      // Aztec: Sunstone Crimson (#C0392B), Obsidian Charcoal (#1B1B1B), Quetzal Jade (#00A86B), Solar Gold (#F39C12)
      y = fromEdge ? this.h + 10 : Math.random() * this.h;
      vy = - (Math.random() * 0.75 + 0.38);
      vx = (Math.random() - 0.5) * 0.55;
      size = Math.random() * 2.8 + 1.1;
      const palette = ['#C0392B', '#1B1B1B', '#00A86B', '#F39C12'];
      color = palette[Math.floor(Math.random() * palette.length)];
    } else if (t === 'chinese') {
      // Chinese: Vermilion Red (#D90429), Imperial Jade (#00A86B), Gold (#E5A93B)
      y = fromEdge ? this.h + 10 : Math.random() * this.h;
      vy = - (Math.random() * 0.55 + 0.25);
      vx = (Math.random() - 0.5) * 0.45;
      size = Math.random() * 3.0 + 1.2;
      const palette = ['#D90429', '#00A86B', '#E5A93B', '#FFD166'];
      color = palette[Math.floor(Math.random() * palette.length)];
    }

    return {
      x, y, vx, vy, size, baseAlpha: alpha, alpha,
      rot, vRot, color, tradition: t,
      fadingIn: false, fadingOut: false,
      angle: Math.random() * Math.PI * 2,
      orbitSpeed: (Math.random() - 0.5) * 0.025
    };
  }

  start() {
    if (this.animId) cancelAnimationFrame(this.animId);
    this.lastTime = performance.now();
    const loop = (now) => {
      const dt = Math.min(2.0, Math.max(0.5, (now - this.lastTime) / 16.67));
      this.lastTime = now;
      this.render(dt);
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  render(dt = 1) {
    if (!this.ctx || !this.w || !this.h) return;
    this.ctx.clearRect(0, 0, this.w, this.h);

    const glowScale = this.glow;

    // Filter and update particles with delta time
    this.particles = this.particles.filter(p => {
      const t = p.tradition;

      // Handle smooth cross-fade alpha
      if (p.fadingOut) {
        p.alpha -= 0.035 * dt;
        if (p.alpha <= 0) return false;
      } else if (p.fadingIn) {
        p.alpha += 0.035 * dt;
        if (p.alpha >= p.baseAlpha) {
          p.alpha = p.baseAlpha;
          p.fadingIn = false;
        }
      }

      // Physics update per tradition
      if (t === 'indian') {
        p.angle += p.orbitSpeed * dt;
        p.x += (Math.cos(p.angle) * 0.75 + p.vx) * dt;
        p.y += (Math.sin(p.angle) * 0.75 + p.vy) * dt;
        p.alpha = Math.max(0.05, p.baseAlpha * (0.6 + 0.4 * Math.sin(p.angle * 2)) * glowScale);
      } else if (t === 'japanese') {
        p.angle += 0.02 * dt;
        p.x += (p.vx + Math.sin(p.angle) * 0.35) * dt;
        p.y += p.vy * dt;
        p.rot += p.vRot * dt;
        if (!p.fadingOut && !p.fadingIn) p.alpha = p.baseAlpha * glowScale;
      } else {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vRot * dt;
        if (!p.fadingOut && !p.fadingIn) p.alpha = p.baseAlpha * glowScale;
      }

      // Edge wrapping
      if (t === 'norse' || t === 'japanese') {
        if (p.y > this.h + 15) { Object.assign(p, this.createParticle(true)); p.y = -10; }
        if (p.x > this.w + 15) p.x = -10;
        if (p.x < -15) p.x = this.w + 10;
      } else {
        if (p.y < -15) { Object.assign(p, this.createParticle(true)); p.y = this.h + 10; }
        if (p.x > this.w + 15) p.x = -10;
        if (p.x < -15) p.x = this.w + 10;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rot);
      this.ctx.globalAlpha = Math.max(0.04, Math.min(1, p.alpha));

      if (t === 'japanese') {
        // Soft Sakura Cherry Blossom Petal with notch
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, p.size * 1.5);
        this.ctx.bezierCurveTo(p.size * 1.4, p.size * 0.6, p.size * 1.2, -p.size * 1.2, 0, -p.size * 0.7);
        this.ctx.bezierCurveTo(-p.size * 1.2, -p.size * 1.2, -p.size * 1.4, p.size * 0.6, 0, p.size * 1.5);
        this.ctx.fill();
        // Inner translucent highlight
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        this.ctx.beginPath();
        this.ctx.arc(0, -p.size * 0.3, p.size * 0.35, 0, Math.PI);
        this.ctx.fill();
      } else if (t === 'norse') {
        // 6-point Snowflake Crystal Star with branching spurs
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.2;
        this.ctx.beginPath();
        for (let a = 0; a < 3; a++) {
          this.ctx.moveTo(-p.size * 1.3, 0);
          this.ctx.lineTo(p.size * 1.3, 0);
          // spurs
          this.ctx.moveTo(-p.size * 0.8, -p.size * 0.35);
          this.ctx.lineTo(-p.size * 0.8, p.size * 0.35);
          this.ctx.moveTo(p.size * 0.8, -p.size * 0.35);
          this.ctx.lineTo(p.size * 0.8, p.size * 0.35);
          this.ctx.rotate(Math.PI / 3);
        }
        this.ctx.stroke();
      } else if (t === 'egypt') {
        // Rising golden stardust & sunbeam diamond
        const grad = this.ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.2);
        grad.addColorStop(0, p.color);
        grad.addColorStop(0.6, 'rgba(245, 208, 97, 0.4)');
        grad.addColorStop(1, 'transparent');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2);
        this.ctx.fill();
        // 4-point solar diamond core
        this.ctx.fillStyle = '#FFFDF0';
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size * 0.9);
        this.ctx.lineTo(p.size * 0.5, 0);
        this.ctx.lineTo(0, p.size * 0.9);
        this.ctx.lineTo(-p.size * 0.5, 0);
        this.ctx.closePath();
        this.ctx.fill();
      } else if (t === 'aztec') {
        // Crackling Fire Sparks & Obsidian Jade Embers
        const grad = this.ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.2);
        grad.addColorStop(0, p.color);
        grad.addColorStop(0.5, 'rgba(255, 87, 34, 0.4)');
        grad.addColorStop(1, 'transparent');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2);
        this.ctx.fill();
        // Fiery center
        this.ctx.fillStyle = '#FFF275';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (t === 'indian') {
        // Radiant saffron & cobalt orbital point with double aura
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 1.2, 0, Math.PI * 2);
        this.ctx.fill();
        // Soft outer glowing aura
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 0.8;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2);
        this.ctx.stroke();
      } else if (t === 'greek') {
        // Olympian azure diamond glints
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size * 1.3);
        this.ctx.lineTo(p.size * 0.9, 0);
        this.ctx.lineTo(0, p.size * 1.3);
        this.ctx.lineTo(-p.size * 0.9, 0);
        this.ctx.closePath();
        this.ctx.fill();
      } else {
        // West African warm honey & savanna clay motes
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 1.1, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
      return true;
    });
  }
}

const globalParticles = new ParticleEngine(document.getElementById('hero-canvas'));


/* ==========================================================================
   SECTION 4: NAVIGATION & AUDIO BUTTON
   ========================================================================== */
const views = document.querySelectorAll('.view');
const navTabLinks = document.querySelectorAll('.tab-link');

function goToTab(tabId) {
  views.forEach(view => view.classList.toggle('is-active', view.id === tabId));
  navTabLinks.forEach(link => {
    const isActive = link.dataset.tab === tabId;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-selected', String(isActive));
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  audio.playChime(440);
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

const audioBtn = document.getElementById('audio-toggle');
if (audioBtn) {
  function updateAudioButtonUI() {
    const isMuted = audio.muted;
    audioBtn.innerHTML = `
      <svg class="audio-icon" viewBox="0 0 24 24" aria-hidden="true">
        <use href="#${isMuted ? 'icon-audio-off' : 'icon-audio-on'}"/>
      </svg>
      <span class="sr-only">${isMuted ? 'Sound off' : 'Sound on'}</span>
    `;
    audioBtn.classList.toggle('is-active', !isMuted);
    audioBtn.title = isMuted ? 'Enable sound effects' : 'Mute sound effects';
  }

  audioBtn.addEventListener('click', () => {
    audio.toggle();
    updateAudioButtonUI();
  });
  updateAudioButtonUI();
}


/* ==========================================================================
   SECTION 5: MULTI-STORY SHOWCASE (7 SACRED TRADITIONS & MOVING ART)
   ========================================================================== */
let activeCultureKey = 'egypt';
let activeStoryIdx = 0;
let currentVisualMode = 'picture';

const cultureTabs = document.querySelectorAll('.culture-tab');
const storySubnavBar = document.getElementById('story-subnav-bar');
const storyShowcaseContainer = document.getElementById('story-showcase-container');
const illustrationStage = document.getElementById('illustration-stage');
const storyCultureTag = document.getElementById('story-culture-tag');
const storyHeadline = document.getElementById('story-headline');
const storyFullText = document.getElementById('story-full-text');
const storyInsightsGrid = document.getElementById('story-insights-grid');
const storyPullquote = document.getElementById('story-pullquote');
const storyReadTime = document.getElementById('story-read-time');
const btnModePicture = document.getElementById('btn-mode-picture');
const btnModeSvg = document.getElementById('btn-mode-svg');

// Visual Mode Switcher Listeners
if (btnModePicture && btnModeSvg) {
  btnModePicture.addEventListener('click', () => {
    currentVisualMode = 'picture';
    btnModePicture.classList.add('is-active');
    btnModePicture.setAttribute('aria-selected', 'true');
    btnModeSvg.classList.remove('is-active');
    btnModeSvg.setAttribute('aria-selected', 'false');
    renderVisualStage(activeCultureKey, activeStoryIdx);
    audio.playTone(520, 'sine', 0.12);
  });

  btnModeSvg.addEventListener('click', () => {
    currentVisualMode = 'svg';
    btnModeSvg.classList.add('is-active');
    btnModeSvg.setAttribute('aria-selected', 'true');
    btnModePicture.classList.remove('is-active');
    btnModePicture.setAttribute('aria-selected', 'false');
    renderVisualStage(activeCultureKey, activeStoryIdx);
    audio.playTone(620, 'sine', 0.12);
  });
}

function renderVisualStage(cultureKey, storyIdx) {
  const culture = CULTURAL_STORIES[cultureKey] || CULTURAL_STORIES.indian;
  const story = culture.stories[storyIdx] || culture.stories[0];
  if (!illustrationStage) return;

  illustrationStage.innerHTML = `
    <div class="illustration-svg-wrap">
      ${story.illustrationSvg}
    </div>
  `;
}

function renderCultureShowcase(cultureKey, storyIdx = 0) {
  // Normalize egyptian/egypt
  if (cultureKey === 'egypt' && CULTURAL_STORIES.egyptian) cultureKey = 'egyptian';
  activeCultureKey = cultureKey;
  activeStoryIdx = storyIdx;

  const culture = CULTURAL_STORIES[cultureKey] || CULTURAL_STORIES.indian;
  const story = culture.stories[storyIdx] || culture.stories[0];

  // 1. Shift body data-pantheon for regional palette
  document.body.setAttribute('data-pantheon', culture.pantheonId);

  // 1a. Dynamically apply Cultural Theme Matrix CSS variables
  const theme = CULTURAL_THEME_MATRIX[cultureKey] || CULTURAL_THEME_MATRIX.indian;
  if (theme) {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--border-style', theme.borderStyle);
    document.documentElement.style.setProperty('--bg-pattern', theme.bgPattern);

    if (storyShowcaseContainer) {
      storyShowcaseContainer.style.setProperty('--primary-color', theme.primaryColor);
      storyShowcaseContainer.style.setProperty('--secondary-color', theme.secondaryColor);
      storyShowcaseContainer.style.setProperty('--border-style', theme.borderStyle);
      storyShowcaseContainer.style.setProperty('--bg-pattern', theme.bgPattern);
    }
  }

  // 1b. Canvas-based particle shift per tradition
  if (typeof globalParticles !== 'undefined' && globalParticles) {
    globalParticles.setTradition(cultureKey);
  }

  // 1c. Ambient audio drone shift per tradition (if active)
  if (typeof audio !== 'undefined' && audio && audio.isDronePlaying) {
    audio.startDrone(cultureKey);
  }

  // 1d. Stop any ongoing narration when switching myths
  if (typeof narrator !== 'undefined' && narrator && narrator.isSpeaking) {
    narrator.stop();
  }

  // 2. Update active culture tab
  cultureTabs.forEach(tab => {
    const isActive = tab.dataset.culture === cultureKey;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  // 3. Render Story Sub-Navigation Pills
  storySubnavBar.innerHTML = '';
  culture.stories.forEach((st, idx) => {
    const btn = document.createElement('button');
    btn.className = `story-pill-btn ${idx === storyIdx ? 'is-active' : ''}`;
    btn.textContent = `✦ ${st.subTitle}`;
    btn.addEventListener('click', () => renderCultureShowcase(cultureKey, idx));
    storySubnavBar.appendChild(btn);
  });

  // 4. Update ambient glow border
  storyShowcaseContainer.className = `story-showcase ${culture.glowClass}`;

  // 5. Render active visual representation (Archival Picture or Moving SVG)
  renderVisualStage(cultureKey, storyIdx);

  // 6. Render story meta, pullquote, full text, and cultural insights
  storyCultureTag.textContent = culture.cultureTag;
  storyHeadline.textContent = story.title;
  if (storyReadTime) storyReadTime.textContent = story.readingTime || '✦ 3 min read';
  if (storyPullquote) storyPullquote.textContent = `“${story.quote || ''}”`;

  storyFullText.innerHTML = story.text.map(para => `<p>${para}</p>`).join('');

  storyInsightsGrid.innerHTML = story.insights.map(item => `
    <div class="lore-insight-item">
      <span class="lore-insight-label">${item.label}</span>
      <span class="lore-insight-val">${item.val}</span>
    </div>
  `).join('');

  // LocalStorage tracking
  try {
    const explored = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXPLORED_MYTHS) || '[]');
    if (!explored.includes(cultureKey)) {
      explored.push(cultureKey);
      localStorage.setItem(STORAGE_KEYS.EXPLORED_MYTHS, JSON.stringify(explored));
    }
    const countEl = document.getElementById('unlocked-endings-count');
    if (countEl) countEl.textContent = `${explored.length}/7 Explored`;
  } catch {}

  audio.playChime(540);
}

cultureTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    renderCultureShowcase(tab.dataset.culture, 0);
  });
});


/* ==========================================================================
   WEB SPEECH API: INTERACTIVE STORY NARRATION (PLAY / PAUSE / STOP)
   ========================================================================== */
class StoryNarrator {
  constructor() {
    this.synth = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null;
    this.state = 'idle'; // 'idle' | 'playing' | 'paused'
    this.currentUtterance = null;
    this.currentText = '';
    this.currentCulture = 'egypt';
    this.currentTitle = '';
    this.voices = [];

    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  get isSpeaking() {
    return this.state === 'playing';
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
  }

  stop() {
    if (!this.synth) return;
    try {
      this.synth.cancel();
    } catch {}
    this.state = 'idle';
    this.currentUtterance = null;
    this.updateUI();
  }

  pause() {
    if (!this.synth) return;
    if (this.state === 'playing') {
      try {
        this.synth.pause();
      } catch {}
      this.state = 'paused';
      this.updateUI();
    }
  }

  resume() {
    if (!this.synth) return;
    if (this.state === 'paused') {
      try {
        this.synth.resume();
      } catch {}
      this.state = 'playing';
      this.updateUI();
    } else if (this.state === 'idle') {
      this.play();
    }
  }

  play(textToSpeak = null, cultureKey = null, title = null) {
    if (!this.synth) {
      alert('Text-to-speech narration is not supported in this browser.');
      return;
    }

    // If currently paused and no new text requested, resume
    if (this.state === 'paused' && (!textToSpeak || textToSpeak === this.currentText)) {
      this.resume();
      return;
    }

    this.stop();

    const culture = cultureKey || activeCultureKey || 'egypt';
    const activeText = textToSpeak || getActiveStoryNarrationText();
    const activeTitle = title || (CULTURAL_STORIES[culture]?.stories[activeStoryIdx]?.title || 'Myth');

    this.currentText = activeText;
    this.currentCulture = culture;
    this.currentTitle = activeTitle;

    const utterance = new SpeechSynthesisUtterance(activeText);
    this.currentUtterance = utterance;

    // Culture-specific pacing and pitch
    const cultureProfiles = {
      norse: { pitch: 0.86, rate: 0.88, toneName: 'Glacial Skald' },
      japanese: { pitch: 1.04, rate: 0.90, toneName: 'Serene Shinto' },
      indian: { pitch: 1.00, rate: 0.92, toneName: 'Vedic Chanted' },
      greek: { pitch: 0.98, rate: 0.94, toneName: 'Homeric Epic' },
      aztec: { pitch: 0.92, rate: 0.95, toneName: 'Solar Priest' },
      westafrican: { pitch: 0.96, rate: 0.92, toneName: 'Griot Lorekeeper' },
      egypt: { pitch: 0.90, rate: 0.90, toneName: 'Temple Priest' }
    };
    const prof = cultureProfiles[culture] || { pitch: 0.95, rate: 0.92, toneName: 'Archival Sage' };
    utterance.pitch = prof.pitch;
    utterance.rate = prof.rate;

    if (this.voices.length > 0) {
      const preferred = this.voices.find(v => v.lang && v.lang.startsWith('en') && (
        v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')
      )) || this.voices.find(v => v.lang && v.lang.startsWith('en'));
      if (preferred) utterance.voice = preferred;
    }

    utterance.onstart = () => {
      this.state = 'playing';
      this.updateUI(prof.toneName);
    };

    utterance.onpause = () => {
      this.state = 'paused';
      this.updateUI();
    };

    utterance.onresume = () => {
      this.state = 'playing';
      this.updateUI(prof.toneName);
    };

    utterance.onend = () => {
      this.state = 'idle';
      this.updateUI();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis warning:', e);
      this.state = 'idle';
      this.updateUI();
    };

    try {
      this.synth.speak(utterance);
      this.state = 'playing';
      this.updateUI(prof.toneName);
    } catch (e) {
      console.warn('Narration failed to start:', e);
      this.state = 'idle';
      this.updateUI();
    }
  }

  toggle(textToSpeak, cultureKey) {
    if (this.state === 'playing') {
      this.pause();
    } else if (this.state === 'paused') {
      this.resume();
    } else {
      this.play(textToSpeak, cultureKey);
    }
  }

  updateUI(toneName = null) {
    const isPlaying = this.state === 'playing';
    const isPaused = this.state === 'paused';
    const isIdle = this.state === 'idle';

    // Toolbar elements
    const btnPlay = document.getElementById('btn-narrate-play');
    const playLabel = document.getElementById('narrate-play-label');
    const btnPause = document.getElementById('btn-narrate-pause');
    const btnStop = document.getElementById('btn-narrate-stop');
    const statusText = document.getElementById('narration-status');

    // Modal elements
    const modalBtnPlay = document.getElementById('modal-narrate-play');
    const modalPlayLabel = document.getElementById('modal-narrate-play-label');
    const modalBtnPause = document.getElementById('modal-narrate-pause');
    const modalBtnStop = document.getElementById('modal-narrate-stop');
    const modalStatusText = document.getElementById('modal-narration-status');

    // Legacy buttons
    const oldBtn = document.getElementById('btn-narrate-story');
    const oldModalBtn = document.getElementById('modal-narrate-btn');

    const updateControls = (bPlay, lPlay, bPause, bStop, sText) => {
      if (bPlay) {
        bPlay.classList.toggle('is-speaking', isPlaying);
        bPlay.classList.toggle('is-paused', isPaused);
      }
      if (lPlay) {
        lPlay.textContent = isPlaying ? 'Speaking...' : (isPaused ? 'Resume Tale' : 'Play Tale');
      }
      if (bPause) {
        bPause.disabled = isIdle;
        bPause.classList.toggle('is-paused', isPaused);
      }
      if (bStop) {
        bStop.disabled = isIdle;
        bStop.classList.toggle('is-hidden', isIdle);
      }
      if (sText) {
        if (isPlaying) {
          sText.textContent = `🔊 Narrating: ${this.currentTitle || 'Legend'}${toneName ? ` (${toneName})` : ''}`;
        } else if (isPaused) {
          sText.textContent = '⏸ Narration Paused';
        } else {
          sText.textContent = '';
        }
      }
    };

    updateControls(btnPlay, playLabel, btnPause, btnStop, statusText);
    updateControls(modalBtnPlay, modalPlayLabel, modalBtnPause, modalBtnStop, modalStatusText);

    if (oldBtn) oldBtn.classList.toggle('is-speaking', isPlaying);
    if (oldModalBtn) oldModalBtn.classList.toggle('is-speaking', isPlaying);
  }
}

const narrator = new StoryNarrator();

function getActiveStoryNarrationText() {
  const culture = CULTURAL_STORIES[activeCultureKey] || CULTURAL_STORIES.egypt;
  const story = culture.stories[activeStoryIdx] || culture.stories[0];
  const parts = [story.title];
  if (story.quote) parts.push(story.quote);
  if (story.text && story.text.length) {
    parts.push(...story.text);
  }
  return parts.join('. ');
}

// Story narration toolbar buttons
const btnNarratePlay = document.getElementById('btn-narrate-play');
const btnNarratePause = document.getElementById('btn-narrate-pause');
const btnNarrateStop = document.getElementById('btn-narrate-stop');
const modalNarratePlay = document.getElementById('modal-narrate-play');
const modalNarratePause = document.getElementById('modal-narrate-pause');
const modalNarrateStop = document.getElementById('modal-narrate-stop');

if (btnNarratePlay) btnNarratePlay.addEventListener('click', () => narrator.play());
if (btnNarratePause) btnNarratePause.addEventListener('click', () => narrator.pause());
if (btnNarrateStop) btnNarrateStop.addEventListener('click', () => narrator.stop());

if (modalNarratePlay) modalNarratePlay.addEventListener('click', () => narrator.play());
if (modalNarratePause) modalNarratePause.addEventListener('click', () => narrator.pause());
if (modalNarrateStop) modalNarrateStop.addEventListener('click', () => narrator.stop());

// Backward-compatibility listeners
const btnNarrateOld = document.getElementById('btn-narrate-story');
if (btnNarrateOld) btnNarrateOld.addEventListener('click', () => narrator.toggle());
const btnModalNarrateOld = document.getElementById('modal-narrate-btn');
if (btnModalNarrateOld) btnModalNarrateOld.addEventListener('click', () => narrator.toggle());


/* ==========================================================================
   FULLSCREEN STORY READING MODAL
   ========================================================================== */
const storyModal = document.getElementById('story-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const btnOpenStoryModal = document.getElementById('btn-open-story-modal');
const modalCultureTag = document.getElementById('modal-culture-tag');
const modalReadTime = document.getElementById('modal-read-time');
const modalStoryTitle = document.getElementById('modal-story-title');
const modalPullquote = document.getElementById('modal-pullquote');
const modalStoryText = document.getElementById('modal-story-text');
const modalInsightsGrid = document.getElementById('modal-insights-grid');

function openStoryModal() {
  if (!storyModal) return;
  const culture = CULTURAL_STORIES[activeCultureKey] || CULTURAL_STORIES.egypt;
  const story = culture.stories[activeStoryIdx] || culture.stories[0];

  if (modalCultureTag) modalCultureTag.textContent = culture.cultureTag;
  if (modalReadTime) modalReadTime.textContent = story.readingTime || '✦ 3 min read';
  if (modalStoryTitle) modalStoryTitle.textContent = story.title;
  if (modalPullquote) {
    if (story.quote) {
      modalPullquote.textContent = `“${story.quote}”`;
      modalPullquote.style.display = 'block';
    } else {
      modalPullquote.style.display = 'none';
    }
  }
  if (modalStoryText) {
    modalStoryText.innerHTML = story.text.map(p => `<p>${p}</p>`).join('');
  }
  if (modalInsightsGrid) {
    modalInsightsGrid.innerHTML = story.insights.map(item => `
      <div class="lore-insight-item">
        <span class="lore-insight-label">${item.label}</span>
        <span class="lore-insight-val">${item.val}</span>
      </div>
    `).join('');
  }

  storyModal.classList.add('is-open');
  storyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  audio.playChime(660);
}

function closeStoryModal() {
  if (!storyModal) return;
  storyModal.classList.remove('is-open');
  storyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  audio.playTone(380, 'sine', 0.1);
}

if (btnOpenStoryModal) btnOpenStoryModal.addEventListener('click', openStoryModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeStoryModal);
if (storyModal) {
  storyModal.addEventListener('click', (e) => {
    if (e.target === storyModal) closeStoryModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && storyModal && storyModal.classList.contains('is-open')) {
    closeStoryModal();
  }
});


/* ==========================================================================
   DYNAMIC ATMOSPHERE CUSTOMIZER WIDGET (580px WORKBENCH)
   ========================================================================== */
function initCustomizerWidget(globalEngine) {
  const previewCanvas = document.getElementById('cust-preview-canvas');
  const swCanvas = document.getElementById('cust-soundwave-canvas');
  if (!previewCanvas) return;

  // 1. Preview Particle Engine
  const previewEngine = new ParticleEngine(previewCanvas, {
    isPreview: true,
    tradition: 'egypt',
    density: 60,
    glow: 0.75
  });

  // UI elements
  const selTradition = document.getElementById('cust-tradition-select');
  const badgeTradition = document.getElementById('cust-tradition-val');
  const sliderDensity = document.getElementById('cust-density-slider');
  const badgeDensity = document.getElementById('cust-density-val');
  const sliderGlow = document.getElementById('cust-glow-slider');
  const badgeGlow = document.getElementById('cust-glow-val');
  const sliderPitch = document.getElementById('cust-pitch-slider');
  const badgePitch = document.getElementById('cust-pitch-val');

  const btnCustDrone = document.getElementById('cust-drone-btn');
  const btnCustApply = document.getElementById('cust-apply-btn');

  // Live Data State Chips
  const dsTradition = document.getElementById('ds-tradition');
  const dsParticles = document.getElementById('ds-particles');
  const dsPitch = document.getElementById('ds-pitch');
  const dsAccent = document.getElementById('ds-accent');

  const CULT_ACCENTS = {
    egypt: '#E5A93B',
    greek: '#007799',
    aztec: '#C0392B',
    norse: '#4A90E2',
    westafrican: '#A04000',
    japanese: '#FFB7C5',
    indian: '#FF9933'
  };

  const CULT_NAMES = {
    egypt: 'Egypt',
    norse: 'Norse',
    japanese: 'Japanese',
    indian: 'Indian',
    greek: 'Greek',
    aztec: 'Aztec',
    westafrican: 'West African'
  };

  function updateDataChips(trad, dens, pitch) {
    const name = CULT_NAMES[trad] || trad;
    const accent = CULT_ACCENTS[trad] || '#E5A93B';
    if (dsTradition) dsTradition.textContent = name;
    if (dsParticles) dsParticles.textContent = dens;
    if (dsPitch) dsPitch.textContent = `${pitch}Hz`;
    if (dsAccent) {
      dsAccent.textContent = accent;
      dsAccent.style.color = accent;
    }
  }

  // Tradition selector
  if (selTradition) {
    selTradition.addEventListener('change', () => {
      const trad = selTradition.value;
      const label = CULT_NAMES[trad] || trad;
      if (badgeTradition) badgeTradition.textContent = label;
      previewEngine.setTradition(trad);
      updateDataChips(trad, sliderDensity ? sliderDensity.value : 60, sliderPitch ? sliderPitch.value : 440);
      if (audio.isDronePlaying) {
        audio.startDrone(trad, sliderPitch ? Number(sliderPitch.value) : 440);
      }
      audio.playTone(520, 'sine', 0.1);
    });
  }

  // Density slider
  if (sliderDensity) {
    sliderDensity.addEventListener('input', () => {
      const val = Number(sliderDensity.value);
      if (badgeDensity) badgeDensity.textContent = `${val} particles`;
      previewEngine.setDensity(val);
      updateDataChips(selTradition ? selTradition.value : 'egypt', val, sliderPitch ? sliderPitch.value : 440);
    });
  }

  // Glow slider
  if (sliderGlow) {
    sliderGlow.addEventListener('input', () => {
      const val = Number(sliderGlow.value);
      if (badgeGlow) badgeGlow.textContent = `${val}%`;
      previewEngine.setGlow(val / 100);
    });
  }

  // Pitch slider
  if (sliderPitch) {
    sliderPitch.addEventListener('input', () => {
      const pitch = Number(sliderPitch.value);
      if (badgePitch) badgePitch.textContent = `${pitch} Hz`;
      audio.setDronePitch(pitch);
      updateDataChips(selTradition ? selTradition.value : 'egypt', sliderDensity ? sliderDensity.value : 60, pitch);
    });
  }

  // Drone Toggle in customizer widget
  if (btnCustDrone) {
    btnCustDrone.addEventListener('click', () => {
      const trad = selTradition ? selTradition.value : 'egypt';
      const pitch = sliderPitch ? Number(sliderPitch.value) : 440;
      audio.toggleDrone(trad, pitch);
    });
  }

  // Drone Toggle in primary navbar
  const droneNavBtn = document.getElementById('drone-toggle');
  if (droneNavBtn) {
    droneNavBtn.addEventListener('click', () => {
      const pitch = sliderPitch ? Number(sliderPitch.value) : 440;
      audio.toggleDrone(activeCultureKey, pitch);
    });
  }

  // Apply to Portal Background button
  if (btnCustApply) {
    btnCustApply.addEventListener('click', () => {
      const trad = selTradition ? selTradition.value : 'egypt';
      const dens = sliderDensity ? Number(sliderDensity.value) : 60;
      const glow = sliderGlow ? Number(sliderGlow.value) / 100 : 0.75;
      const pitch = sliderPitch ? Number(sliderPitch.value) : 440;

      if (globalEngine) {
        globalEngine.setTradition(trad);
        globalEngine.setDensity(dens);
        globalEngine.setGlow(glow);
      }

      document.body.setAttribute('data-pantheon', trad);

      if (audio.isDronePlaying) {
        audio.startDrone(trad, pitch);
      }

      const origText = btnCustApply.innerHTML;
      btnCustApply.innerHTML = '<span>✓ Applied to Portal!</span>';
      audio.playFanfare();
      setTimeout(() => {
        btnCustApply.innerHTML = origText;
      }, 2200);
    });
  }

  // Chiptune Melody Synthesizer Button
  const btnCustMelody = document.getElementById('cust-melody-btn');
  if (btnCustMelody) {
    btnCustMelody.addEventListener('click', () => {
      const trad = selTradition ? selTradition.value : 'egypt';
      btnCustMelody.classList.add('is-playing');
      audio.playCivilizationMelody(trad);
      setTimeout(() => {
        btnCustMelody.classList.remove('is-playing');
      }, 2400);
    });
  }

  // Sound Wave Visualizer Canvas
  if (swCanvas) {
    const swCtx = swCanvas.getContext('2d');
    let swPhase = 0;

    function renderSoundwave() {
      const w = swCanvas.width;
      const h = swCanvas.height;
      swCtx.clearRect(0, 0, w, h);

      const trad = selTradition ? selTradition.value : 'egypt';
      const strokeColor = CULT_ACCENTS[trad] || '#E5A93B';
      const isPlaying = audio.isDronePlaying;
      const pitch = sliderPitch ? Number(sliderPitch.value) : 440;

      const baseAmp = isPlaying ? 22 : 4;
      const speed = isPlaying ? (pitch / 440) * 0.08 : 0.02;
      swPhase += speed;

      // Center reference baseline
      swCtx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      swCtx.lineWidth = 1;
      swCtx.beginPath();
      swCtx.moveTo(0, h / 2);
      swCtx.lineTo(w, h / 2);
      swCtx.stroke();

      // Primary sine wave
      swCtx.beginPath();
      swCtx.lineWidth = 2.5;
      swCtx.strokeStyle = strokeColor;
      for (let x = 0; x < w; x++) {
        const envelope = Math.sin((x / w) * Math.PI);
        const y = h / 2 + Math.sin(x * 0.035 + swPhase) * baseAmp * envelope;
        if (x === 0) swCtx.moveTo(x, y);
        else swCtx.lineTo(x, y);
      }
      swCtx.stroke();

      // Harmonic secondary wave
      if (isPlaying) {
        swCtx.beginPath();
        swCtx.lineWidth = 1.2;
        swCtx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        for (let x = 0; x < w; x++) {
          const envelope = Math.sin((x / w) * Math.PI);
          const y = h / 2 + Math.cos(x * 0.07 - swPhase * 1.5) * (baseAmp * 0.55) * envelope;
          if (x === 0) swCtx.moveTo(x, y);
          else swCtx.lineTo(x, y);
        }
        swCtx.stroke();
      }

      requestAnimationFrame(renderSoundwave);
    }

    renderSoundwave();
  }

  updateDataChips('egypt', 60, 440);
}

// Initialize Customizer Widget with global background engine
initCustomizerWidget(globalParticles);

// Initial story render
renderCultureShowcase('indian', 0);


/* ==========================================================================
   SECTION 6: PROGRESSIVE MULTI-LEVEL PANTHEON MATCH (10 LEVELS: 6 TO 36 TILES)
   ========================================================================== */
const MATCH_LEVELS = [
  { level: 1, name: "Apprentice Seeker", tiles: 6, pairs: 3, colsClass: "cols-3", icons: ['icon-greek', 'icon-norse', 'icon-egyptian'] },
  { level: 2, name: "Temple Initiate", tiles: 8, pairs: 4, colsClass: "cols-4", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese'] },
  { level: 3, name: "Tribal Adept", tiles: 12, pairs: 6, colsClass: "cols-4", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec'] },
  { level: 4, name: "Sacred Mystic", tiles: 16, pairs: 8, colsClass: "cols-4", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus'] },
  { level: 5, name: "Valhalla Warrior", tiles: 20, pairs: 10, colsClass: "cols-5", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel'] },
  { level: 6, name: "Feathered Serpent", tiles: 24, pairs: 12, colsClass: "cols-6", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel', 'icon-serpent', 'icon-ankh'] },
  { level: 7, name: "Celestial Rishi", tiles: 28, pairs: 14, colsClass: "cols-7", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel', 'icon-serpent', 'icon-ankh', 'icon-trishula', 'icon-lotus'] },
  { level: 8, name: "Shinto Guardian", tiles: 30, pairs: 15, colsClass: "cols-6", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel', 'icon-serpent', 'icon-ankh', 'icon-trishula', 'icon-lotus', 'icon-sakura'] },
  { level: 9, name: "Titan Overlord", tiles: 32, pairs: 16, colsClass: "cols-8", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel', 'icon-serpent', 'icon-ankh', 'icon-trishula', 'icon-lotus', 'icon-sakura', 'icon-scarab'] },
  { level: 10, name: "Grand Cosmic Sovereign", tiles: 36, pairs: 18, colsClass: "cols-6", icons: ['icon-greek', 'icon-norse', 'icon-egyptian', 'icon-japanese', 'icon-chinese', 'icon-aztec', 'icon-indian', 'icon-eye-horus', 'icon-mjolnir', 'icon-laurel', 'icon-serpent', 'icon-ankh', 'icon-trishula', 'icon-lotus', 'icon-sakura', 'icon-scarab', 'icon-helm-awe', 'icon-pyramid'] }
];

let currentMatchLevelIdx = 0;
let matchGameState = { flipped: [], matchedCount: 0, moves: 0, timerId: null, seconds: 0, locked: false, totalScore: 0 };

const matchGrid = document.getElementById('match-grid');
const matchLevelIndicator = document.getElementById('match-level-indicator');
const matchMovesEl = document.getElementById('match-moves');
const matchTimerEl = document.getElementById('match-timer');
const matchScoreEl = document.getElementById('match-score');
const matchWinEl = document.getElementById('match-win');
const matchRestartBtn = document.getElementById('match-restart');

function shuffleDeck(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startMatchLevelTimer() {
  if (matchGameState.timerId) return;
  matchGameState.timerId = setInterval(() => {
    matchGameState.seconds++;
    const m = Math.floor(matchGameState.seconds / 60);
    const s = String(matchGameState.seconds % 60).padStart(2, '0');
    matchTimerEl.textContent = `${m}:${s}`;
  }, 1000);
}

function buildMatchLevel(levelIdx) {
  currentMatchLevelIdx = levelIdx;
  const config = MATCH_LEVELS[levelIdx];

  clearInterval(matchGameState.timerId);
  matchGameState.timerId = null;
  matchGameState.flipped = [];
  matchGameState.matchedCount = 0;
  matchGameState.moves = 0;
  matchGameState.seconds = 0;
  matchGameState.locked = false;

  matchLevelIndicator.textContent = `Level ${config.level} / 10 • ${config.name} (${config.tiles} Tiles)`;
  matchMovesEl.textContent = '0';
  matchTimerEl.textContent = '0:00';
  matchWinEl.hidden = true;
  matchGrid.innerHTML = '';
  matchGrid.className = `match-grid ${config.colsClass}`;

  const dots = document.querySelectorAll('.level-dot');
  dots.forEach(dot => {
    const lvlNum = Number(dot.dataset.lvl);
    dot.classList.toggle('is-active', lvlNum === config.level);
    dot.classList.toggle('is-cleared', lvlNum < config.level);
  });

  const deck = shuffleDeck([...config.icons, ...config.icons]);
  deck.forEach((icon, idx) => {
    const card = document.createElement('button');
    card.className = 'match-card';
    card.dataset.icon = icon;
    card.setAttribute('aria-label', `Tile ${idx + 1}`);
    card.innerHTML = `
      <div class="match-card-inner">
        <div class="match-card-face match-card-back">✦</div>
        <div class="match-card-face match-card-front">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#${icon}"/></svg>
        </div>
      </div>
    `;
    card.addEventListener('click', () => handleMatchCardClick(card, config));
    matchGrid.appendChild(card);
  });
}

function handleMatchCardClick(card, config) {
  if (matchGameState.locked) return;
  if (card.classList.contains('is-flipped') || card.classList.contains('is-matched')) return;

  startMatchLevelTimer();
  audio.playCardFlip();

  card.classList.add('is-flipped');
  matchGameState.flipped.push(card);

  if (matchGameState.flipped.length === 2) {
    matchGameState.moves++;
    matchMovesEl.textContent = matchGameState.moves;
    const [c1, c2] = matchGameState.flipped;

    if (c1.dataset.icon === c2.dataset.icon) {
      c1.classList.add('is-matched');
      c2.classList.add('is-matched');
      matchGameState.flipped = [];
      matchGameState.matchedCount++;
      audio.playMatchSuccess();

      if (matchGameState.matchedCount === config.pairs) {
        clearInterval(matchGameState.timerId);
        handleLevelComplete(config);
      }
    } else {
      matchGameState.locked = true;
      setTimeout(() => {
        c1.classList.remove('is-flipped');
        c2.classList.remove('is-flipped');
        c1.setAttribute('aria-pressed', 'false');
        c2.setAttribute('aria-pressed', 'false');
        matchGameState.flipped = [];
        matchGameState.locked = false;
      }, 720);
    }
  }
}

function handleLevelComplete(config) {
  audio.playFanfare();
  const roundPts = Math.max(50, 200 - (matchGameState.moves * 5) - matchGameState.seconds + (config.level * 25));
  matchGameState.totalScore += roundPts;
  matchScoreEl.textContent = matchGameState.totalScore;
  matchWinEl.hidden = false;

  const isFinalLevel = currentMatchLevelIdx >= MATCH_LEVELS.length - 1;
  if (!isFinalLevel) {
    const nextLvl = MATCH_LEVELS[currentMatchLevelIdx + 1];
    matchWinEl.innerHTML = `
      <h3 style="font-size:1.5rem;color:var(--pantheon-accent);margin-bottom:8px;">✦ Level ${config.level} Cleared: ${config.name}! ✦</h3>
      <p style="margin:0 0 12px;">Completed in <strong>${matchGameState.moves} moves</strong> (${matchTimerEl.textContent}). Round score: +${roundPts} pts.</p>
      <button class="level-advance-btn" id="btn-next-level">Proceed to Level ${nextLvl.level} (${nextLvl.name} • ${nextLvl.tiles} Tiles) →</button>
    `;
    const btnNext = document.getElementById('btn-next-level');
    if (btnNext) btnNext.addEventListener('click', () => buildMatchLevel(currentMatchLevelIdx + 1));
  } else {
    matchWinEl.innerHTML = `
      <h3 style="font-size:1.8rem;color:var(--pantheon-accent);margin-bottom:8px;">👑 Grand Cosmic Sovereign! 👑</h3>
      <p style="margin:0 0 16px;">All 10 progressive trials conquered across 36 tiles! Final Score: <strong>${matchGameState.totalScore} pts</strong>.</p>
      <button class="level-advance-btn" id="btn-restart-game">Replay from Level 1 (6 Tiles) ↺</button>
    `;
    const btnRestart = document.getElementById('btn-restart-game');
    if (btnRestart) btnRestart.addEventListener('click', () => {
      matchGameState.totalScore = 0;
      matchScoreEl.textContent = '0';
      buildMatchLevel(0);
    });
  }
}

if (matchRestartBtn) matchRestartBtn.addEventListener('click', () => buildMatchLevel(currentMatchLevelIdx));
document.querySelectorAll('.level-dot').forEach(dot => {
  dot.addEventListener('click', () => buildMatchLevel(Number(dot.dataset.lvl) - 1));
});
buildMatchLevel(0);


/* ==========================================================================
   SECTION 7: TRIAL GROUNDS — SUB-NAV & RIDDLE TRIALS QUIZ
   ========================================================================== */
document.querySelectorAll('.games-sub-nav .pill-link').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.games-sub-nav .pill-link').forEach(p => p.classList.remove('is-active'));
    pill.classList.add('is-active');
    document.querySelectorAll('.game-panel').forEach(panel => panel.classList.remove('is-active'));
    const target = document.getElementById('game-' + pill.dataset.game);
    if (target) target.classList.add('is-active');
    audio.playChime(460);
  });
});

const QUIZ = [
  { q: "In Greek mythology, which deity rules the sea, earthquakes, and horses?", options: ["Zeus", "Poseidon", "Hades", "Apollo"], correct: 1, explain: "Poseidon wields the trident and was revered as the Earth-Shaker." },
  { q: "What is the colossal world tree that bridges the nine Norse realms?", options: ["Valhalla", "Bifrost", "Yggdrasil", "Midgard"], correct: 2, explain: "Yggdrasil connects Asgard to the deepest roots of Niflheim." },
  { q: "Which Egyptian deity guides souls and weighs the heart against Ma'at's feather?", options: ["Ra", "Osiris", "Anubis", "Horus"], correct: 2, explain: "Anubis conducts the psychostasia in the Hall of Two Truths." },
  { q: "In Japanese folklore, which shapeshifting creature gains up to nine tails?", options: ["Tanuki", "Kitsune", "Oni", "Tengu"], correct: 1, explain: "A kitsune's wisdom and magical power culminate in nine tails." },
  { q: "Anansi of West Africa tricked the Sky God to win which treasure for mortals?", options: ["The Golden Stool", "All World Stories", "Sacred Drums", "Iron Tools"], correct: 1, explain: "Anansi won the celestial box of tales for all humanity." },
  { q: "Quetzalcoatl, the feathered serpent of dawn and wind, belongs to which mythology?", options: ["Incan", "Aztec", "Mayan", "Celtic"], correct: 1, explain: "Quetzalcoatl was central to Aztec and Mesoamerican tradition." },
  { q: "In Indian mythology, what is the divine nectar of immortality churned from the milky ocean?", options: ["Soma", "Amrita", "Prana", "Ganga"], correct: 1, explain: "Amrita was churned during Samudra Manthan to restore divine power." },
  { q: "In Norse belief, what is the prophesied twilight and renewal of the cosmos?", options: ["Fimbulwinter", "Ragnarök", "Ginnungagap", "Naglfar"], correct: 1, explain: "Ragnarök culminates in the rebirth of a green and peaceful world." },
  { q: "The Egyptian goddess of truth, balance, and cosmic harmony is:", options: ["Isis", "Ma'at", "Bastet", "Sekhmet"], correct: 1, explain: "Ma'at personifies divine balance opposite chaos (Isfet)." },
  { q: "According to Aztec cosmology, in which cosmic cycle or Sun do mortals live?", options: ["The First Sun", "The Third Sun", "The Fifth Sun", "The Seventh Sun"], correct: 2, explain: "Humanity dwells under the Fifth Sun, ignited by Nanahuatzin." }
];

let quizIndex = 0, quizScore = 0, quizTimerId = null, quizLocked = false;
const quizBody = document.getElementById('quiz-body');
const quizResult = document.getElementById('quiz-result');
const quizProgress = document.getElementById('quiz-progress');
const quizScoreEl = document.getElementById('quiz-score');
const quizRecordEl = document.getElementById('quiz-record');
const quizTimerFill = document.getElementById('quiz-timer-fill');

function startQuiz() {
  quizIndex = 0; quizScore = 0;
  quizResult.hidden = true;
  quizBody.style.display = '';
  document.querySelector('.quiz-timer-track').style.display = '';
  quizScoreEl.textContent = '0';
  const rec = localStorage.getItem(STORAGE_KEYS.QUIZ_RECORD);
  if (quizRecordEl) quizRecordEl.textContent = rec ? `${rec}/10` : '—';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  clearTimeout(quizTimerId);
  quizLocked = false;
  const item = QUIZ[quizIndex];
  quizProgress.textContent = `Question ${quizIndex + 1} / ${QUIZ.length}`;
  quizBody.innerHTML = `
    <p class="quiz-question">${item.q}</p>
    <div class="quiz-options"></div>
    <div class="quiz-explain" hidden></div>
  `;

  const wrap = quizBody.querySelector('.quiz-options');
  item.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'quiz-option';
    b.textContent = opt;
    b.addEventListener('click', () => answerQuiz(i));
    wrap.appendChild(b);
  });

  quizTimerFill.style.transition = 'none';
  quizTimerFill.style.transform = 'scaleX(1)';
  requestAnimationFrame(() => {
    quizTimerFill.style.transition = 'transform 15s linear';
    quizTimerFill.style.transform = 'scaleX(0)';
  });
  quizTimerId = setTimeout(() => answerQuiz(-1), 15000);
}

function answerQuiz(chosenIdx) {
  if (quizLocked) return;
  quizLocked = true;
  clearTimeout(quizTimerId);
  quizTimerFill.style.transition = 'none';

  const item = QUIZ[quizIndex];
  const buttons = quizBody.querySelectorAll('.quiz-option');
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === item.correct) b.classList.add('is-correct');
    else if (i === chosenIdx) b.classList.add('is-wrong');
  });

  if (chosenIdx === item.correct) {
    quizScore++;
    quizScoreEl.textContent = quizScore;
    audio.playCorrect();
  } else {
    audio.playWrong();
  }

  const exp = quizBody.querySelector('.quiz-explain');
  exp.hidden = false;
  exp.innerHTML = `<strong>Ancient Lore:</strong> ${item.explain}`;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next';
  nextBtn.textContent = quizIndex < QUIZ.length - 1 ? 'Next Riddle →' : 'View Judgment →';
  nextBtn.addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < QUIZ.length) renderQuizQuestion();
    else showQuizResult();
  });
  quizBody.appendChild(nextBtn);
}

function showQuizResult() {
  quizBody.style.display = 'none';
  document.querySelector('.quiz-timer-track').style.display = 'none';
  quizResult.hidden = false;

  let rank = 'Wanderer';
  if (quizScore >= 9) rank = 'Oracle of the Cosmos';
  else if (quizScore >= 7) rank = 'Loremaster of the Tapestry';
  else if (quizScore >= 4) rank = 'Seeker of Lost Truths';

  const rec = parseInt(localStorage.getItem(STORAGE_KEYS.QUIZ_RECORD) || '0', 10);
  if (quizScore > rec) localStorage.setItem(STORAGE_KEYS.QUIZ_RECORD, String(quizScore));

  quizResult.innerHTML = `
    <h3>${quizScore} / ${QUIZ.length}</h3>
    <div class="quiz-rank-badge">✦ ${rank} ✦</div>
    <p>Your knowledge echoes through the halls of myth.</p>
    <button class="quiz-retry" id="btn-quiz-retry">Challenge Again</button>
  `;
  const btnQuizRetry = document.getElementById('btn-quiz-retry');
  if (btnQuizRetry) btnQuizRetry.addEventListener('click', startQuiz);
  audio.playFanfare();
}

startQuiz();


/* ==========================================================================
   SECTION 8: LEGENDARY CREATURE CROSSWORDS (5 PROGRESSIVE DIFFICULTY LEVELS)
   ========================================================================== */
const CROSSWORD_LEVELS = [
  // LEVEL 1: Novice Cryptids (6 words, 9x9)
  {
    id: 1,
    title: "Level 1: Novice Cryptids",
    subtitle: "Famous Guardians & Primordial Entities",
    difficulty: "Initiate (★☆☆☆☆)",
    difficultyStars: "★☆☆☆☆",
    traditions: "Egyptian • Greek • Indian",
    rows: 9,
    cols: 9,
    words: [
      { num: 1, dir: 'A', word: 'SPHINX', r: 1, c: 1, clue: 'Egyptian guardian beast with a lion body and human head, poser of deadly riddles.', origin: 'Egyptian' },
      { num: 3, dir: 'A', word: 'ANUBIS', r: 4, c: 2, clue: 'Jackal-headed Egyptian deity who guides departed souls to the underworld.', origin: 'Egyptian' },
      { num: 5, dir: 'A', word: 'OSIRIS', r: 7, c: 1, clue: 'Egyptian sovereign of the afterlife and divine renewal, husband of Isis.', origin: 'Egyptian' },
      { num: 1, dir: 'D', word: 'SET', r: 1, c: 1, clue: 'Egyptian desert god of storms and chaos who betrayed Osiris.', origin: 'Egyptian' },
      { num: 2, dir: 'D', word: 'PEGASUS', r: 1, c: 2, clue: 'Winged divine stallion of Greek lore born from Medusa.', origin: 'Greek' },
      { num: 4, dir: 'D', word: 'SHIVA', r: 4, c: 7, clue: 'Cosmic deity of Indian tradition who drank the blue Halahala ocean venom.', origin: 'Indian' }
    ]
  },

  // LEVEL 2: Adept Beastmaster (8 words, 14x10)
  {
    id: 2,
    title: "Level 2: Adept Beastmaster",
    subtitle: "Divine Avians, Tricksters & Underworld Guides",
    difficulty: "Adept (★★☆☆☆)",
    difficultyStars: "★★☆☆☆",
    traditions: "Egyptian • Greek • Norse • Aztec • West African • Indian • Japanese",
    rows: 14,
    cols: 10,
    words: [
      { num: 1, dir: 'A', word: 'SPHINX', r: 1, c: 1, clue: 'Egyptian guardian beast with a lion body and human head, poser of riddles.', origin: 'Egyptian' },
      { num: 3, dir: 'A', word: 'PEGASUS', r: 4, c: 1, clue: 'Winged divine stallion of Greek myth ridden by Bellerophon.', origin: 'Greek' },
      { num: 5, dir: 'A', word: 'THOR', r: 7, c: 1, clue: 'Norse thunder god wielding the crushing hammer Mjolnir.', origin: 'Norse' },
      { num: 6, dir: 'A', word: 'ANUBIS', r: 8, c: 4, clue: 'Jackal-headed guide of souls and weigher of hearts in the Duat.', origin: 'Egyptian' },
      
      { num: 1, dir: 'D', word: 'SERPENT', r: 1, c: 1, clue: 'Feathered dragon Quetzalcoatl of the Aztec cosmos.', origin: 'Aztec' },
      { num: 2, dir: 'D', word: 'ANANSI', r: 0, c: 5, clue: 'Clever West African spider trickster who won the Box of Stories.', origin: 'West African' },
      { num: 4, dir: 'D', word: 'ASURA', r: 4, c: 4, clue: 'Mighty supernatural titans in Indian mythology who churned the ocean.', origin: 'Indian' },
      { num: 7, dir: 'D', word: 'KITSUNE', r: 7, c: 8, clue: 'Shapeshifting nine-tailed magical fox spirit of Japanese folklore.', origin: 'Japanese' }
    ]
  },

  // LEVEL 3: Mythic Chimera (10 words, 15x12)
  {
    id: 3,
    title: "Level 3: Mythic Chimera",
    subtitle: "The Living Web of Seven Sacred Traditions",
    difficulty: "Scholar (★★★☆☆)",
    difficultyStars: "★★★☆☆",
    traditions: "All 7 Traditions (Egypt, Greek, Norse, Aztec, West African, Indian, Japanese)",
    rows: 15,
    cols: 12,
    words: [
      { num: 1, dir: 'A', word: 'SPHINX', r: 1, c: 1, clue: 'Egyptian guardian beast with a lion body and human head, poser of deadly riddles.', origin: 'Egyptian' },
      { num: 4, dir: 'A', word: 'PEGASUS', r: 4, c: 1, clue: 'Winged divine stallion of Greek lore, born from the foam and blood of Medusa.', origin: 'Greek' },
      { num: 6, dir: 'A', word: 'THOR', r: 7, c: 1, clue: 'Mighty Norse god of thunder, protector of Asgard, who wields the hammer Mjolnir.', origin: 'Norse' },
      { num: 7, dir: 'A', word: 'ANUBIS', r: 8, c: 4, clue: 'Jackal-headed Egyptian deity who guides departed souls and supervises the scales.', origin: 'Egyptian' },
      { num: 8, dir: 'A', word: 'GARUDA', r: 11, c: 5, clue: 'Golden-winged king of birds and celestial eagle mount of Lord Vishnu in Indian lore.', origin: 'Indian' },
      
      { num: 1, dir: 'D', word: 'SERPENT', r: 1, c: 1, clue: 'The feathered dragon Quetzalcoatl of the Aztec cosmos, patron of wind and dawn.', origin: 'Aztec' },
      { num: 2, dir: 'D', word: 'ANANSI', r: 0, c: 5, clue: 'Clever West African trickster spider who tricked the Sky God to win all world stories.', origin: 'West African' },
      { num: 3, dir: 'D', word: 'ASURA', r: 4, c: 4, clue: 'Mighty supernatural beings and titans in Indian mythology who churned the cosmic ocean.', origin: 'Indian' },
      { num: 5, dir: 'D', word: 'KITSUNE', r: 7, c: 8, clue: 'Shapeshifting nine-tailed magical fox spirit of Japanese Shinto folklore.', origin: 'Japanese' },
      { num: 9, dir: 'D', word: 'KRAKEN', r: 9, c: 6, clue: 'Colossal tentacled sea monster of Norse legend capable of dragging ships into the deep.', origin: 'Norse' }
    ]
  },

  // LEVEL 4: Ancient Archons (12 words, 15x13)
  {
    id: 4,
    title: "Level 4: Ancient Archons",
    subtitle: "Legendary Beasts, Norse Sagas & Underworld Titans",
    difficulty: "Master (★★★★☆)",
    difficultyStars: "★★★★☆",
    traditions: "All 7 Traditions + Norse Lore Sagas",
    rows: 15,
    cols: 13,
    words: [
      { num: 1, dir: 'A', word: 'SPHINX', r: 1, c: 1, clue: 'Egyptian guardian beast with a lion body and human head, poser of deadly riddles.', origin: 'Egyptian' },
      { num: 3, dir: 'A', word: 'VALKYRIE', r: 2, c: 4, clue: 'Norse warrior maidens who escort fallen valiant warriors to the halls of Valhalla.', origin: 'Norse' },
      { num: 4, dir: 'A', word: 'PEGASUS', r: 4, c: 1, clue: 'Winged divine stallion of Greek lore, born from the foam and blood of Medusa.', origin: 'Greek' },
      { num: 6, dir: 'A', word: 'THOR', r: 7, c: 1, clue: 'Mighty Norse god of thunder, protector of Asgard, who wields the hammer Mjolnir.', origin: 'Norse' },
      { num: 7, dir: 'A', word: 'ANUBIS', r: 8, c: 4, clue: 'Jackal-headed Egyptian deity who guides departed souls and supervises the scales.', origin: 'Egyptian' },
      { num: 9, dir: 'A', word: 'GARUDA', r: 11, c: 5, clue: 'Golden-winged king of birds and celestial eagle mount of Lord Vishnu in Indian lore.', origin: 'Indian' },
      
      { num: 1, dir: 'D', word: 'SERPENT', r: 1, c: 1, clue: 'The feathered dragon Quetzalcoatl of the Aztec cosmos, patron of wind and dawn.', origin: 'Aztec' },
      { num: 2, dir: 'D', word: 'ANANSI', r: 0, c: 5, clue: 'Clever West African trickster spider who tricked the Sky God to win all world stories.', origin: 'West African' },
      { num: 3, dir: 'D', word: 'ASURA', r: 4, c: 4, clue: 'Mighty supernatural beings and titans in Indian mythology who churned the cosmic ocean.', origin: 'Indian' },
      { num: 5, dir: 'D', word: 'KITSUNE', r: 7, c: 8, clue: 'Shapeshifting nine-tailed magical fox spirit of Japanese Shinto folklore.', origin: 'Japanese' },
      { num: 8, dir: 'D', word: 'ODIN', r: 10, c: 9, clue: 'Allfather of the Norse pantheon who sacrificed an eye at the Well of Mimir.', origin: 'Norse' },
      { num: 10, dir: 'D', word: 'KRAKEN', r: 9, c: 6, clue: 'Colossal tentacled sea monster of Norse legend capable of dragging ships into the deep.', origin: 'Norse' }
    ]
  },

  // LEVEL 5: Primeval Titans (14 words, 16x13)
  {
    id: 5,
    title: "Level 5: Primeval Titans",
    subtitle: "Cosmic Monsters, Shapeshifters & World Serpents",
    difficulty: "Grand Oracle (★★★★★)",
    difficultyStars: "★★★★★",
    traditions: "Grand Master Web • 14 Interconnected Entities",
    rows: 16,
    cols: 13,
    words: [
      { num: 1, dir: 'A', word: 'SPHINX', r: 1, c: 1, clue: 'Egyptian guardian beast with a lion body and human head, poser of deadly riddles.', origin: 'Egyptian' },
      { num: 3, dir: 'A', word: 'VALKYRIE', r: 2, c: 4, clue: 'Norse warrior maidens who escort fallen valiant warriors to the halls of Valhalla.', origin: 'Norse' },
      { num: 4, dir: 'A', word: 'PEGASUS', r: 4, c: 1, clue: 'Winged divine stallion of Greek lore, born from the foam and blood of Medusa.', origin: 'Greek' },
      { num: 6, dir: 'A', word: 'THOR', r: 7, c: 1, clue: 'Mighty Norse god of thunder, protector of Asgard, who wields the hammer Mjolnir.', origin: 'Norse' },
      { num: 7, dir: 'A', word: 'ANUBIS', r: 8, c: 4, clue: 'Jackal-headed Egyptian deity who guides departed souls and supervises the scales.', origin: 'Egyptian' },
      { num: 9, dir: 'A', word: 'GARUDA', r: 11, c: 5, clue: 'Golden-winged king of birds and celestial eagle mount of Lord Vishnu in Indian lore.', origin: 'Indian' },
      { num: 11, dir: 'A', word: 'LOKI', r: 12, c: 4, clue: 'Cunning Norse shapeshifter and trickster bound beneath the earth with a venomous serpent.', origin: 'Norse' },
      { num: 12, dir: 'A', word: 'FENRIR', r: 14, c: 4, clue: 'Colossal monstrous wolf bound by the silken cord Gleipnir, fated to swallow the sun.', origin: 'Norse' },
      
      { num: 1, dir: 'D', word: 'SERPENT', r: 1, c: 1, clue: 'The feathered dragon Quetzalcoatl of the Aztec cosmos, patron of wind and dawn.', origin: 'Aztec' },
      { num: 2, dir: 'D', word: 'ANANSI', r: 0, c: 5, clue: 'Clever West African trickster spider who tricked the Sky God to win all world stories.', origin: 'West African' },
      { num: 3, dir: 'D', word: 'ASURA', r: 4, c: 4, clue: 'Mighty supernatural beings and titans in Indian mythology who churned the cosmic ocean.', origin: 'Indian' },
      { num: 5, dir: 'D', word: 'KITSUNE', r: 7, c: 8, clue: 'Shapeshifting nine-tailed magical fox spirit of Japanese Shinto folklore.', origin: 'Japanese' },
      { num: 8, dir: 'D', word: 'ODIN', r: 10, c: 9, clue: 'Allfather of the Norse pantheon who sacrificed an eye at the Well of Mimir.', origin: 'Norse' },
      { num: 10, dir: 'D', word: 'KRAKEN', r: 9, c: 6, clue: 'Colossal tentacled sea monster of Norse legend capable of dragging ships into the deep.', origin: 'Norse' }
    ]
  },

  // 10x10 EXPEDITION: West African Tradition
  {
    id: "wa_10x10",
    title: "Expedition: West African 10×10",
    subtitle: "Forest Spirits, Orishas & The Sky God",
    difficulty: "Expedition Master (★★★★☆)",
    difficultyStars: "✦ West Africa",
    traditions: "West African Tradition (Yoruba & Ashanti)",
    rows: 10,
    cols: 10,
    words: [
      { num: 2, dir: 'A', word: 'ORISHA', r: 0, c: 4, clue: 'Spirits and divine emissaries of Olodumare in Yoruba spiritual belief.', origin: 'West African' },
      { num: 3, dir: 'A', word: 'ANANSI', r: 1, c: 0, clue: 'The shrewd spider trickster of the Ashanti and Akan folktales who secured all worldly tales.', origin: 'West African' },
      { num: 1, dir: 'D', word: 'SANGO', r: 0, c: 0, clue: 'Mighty orisha of thunder, lightning, and royal justice wielding a double-headed axe.', origin: 'West African' },
      { num: 2, dir: 'D', word: 'OSEBO', r: 0, c: 4, clue: 'The fierce leopard of terrible teeth tricked into a pit trap by Anansi.', origin: 'West African' },
      { num: 4, dir: 'D', word: 'NYAME', r: 1, c: 1, clue: 'Supreme Sky God who held the golden gourd containing all wisdom and story lore.', origin: 'West African' },
      { num: 5, dir: 'D', word: 'OGUN', r: 4, c: 0, clue: 'Yoruba patron orisha of iron, metalsmiths, technology, and warrior artisans.', origin: 'West African' }
    ]
  },

  // 10x10 EXPEDITION: Aztec Sun Tradition
  {
    id: "az_10x10",
    title: "Expedition: Aztec Sun 10×10",
    subtitle: "Primordial Earth Monsters, Rain Gods & Feathered Serpents",
    difficulty: "Expedition Master (★★★★☆)",
    difficultyStars: "✦ Aztec",
    traditions: "Mesoamerican Aztec Pantheon",
    rows: 10,
    cols: 10,
    words: [
      { num: 1, dir: 'A', word: 'SERPENT', r: 1, c: 0, clue: 'The Feathered Dragon Quetzalcoatl, bringer of maize, wind, and celestial wisdom.', origin: 'Aztec' },
      { num: 4, dir: 'A', word: 'MICTLAN', r: 2, c: 2, clue: 'The nine-layered shadowy realm of the dead ruled by Lord Mictlantecuhtli.', origin: 'Aztec' },
      { num: 5, dir: 'A', word: 'JAGUAR', r: 3, c: 2, clue: 'Fierce sacred feline of Tezcatlipoca that stalks nocturnal temples and the First Sun.', origin: 'Aztec' },
      { num: 6, dir: 'A', word: 'CIPACTLI', r: 4, c: 0, clue: 'The voracious primeval crocodile beast from whose cosmic body heaven and earth were carved.', origin: 'Aztec' },
      { num: 2, dir: 'D', word: 'TLALOC', r: 1, c: 6, clue: 'Ancient Mesoamerican deity of lifegiving rain, lightning, and fertile harvest mountains.', origin: 'Aztec' },
      { num: 3, dir: 'D', word: 'HUITZIL', r: 2, c: 1, clue: 'Prefix for Huitzilopochtli, the triumphant hummingbird solar deity of Tenochtitlan.', origin: 'Aztec' }
    ]
  },

  // 10x10 EXPEDITION: Vedic Cosmic Tradition
  {
    id: "in_10x10",
    title: "Expedition: Vedic Cosmic 10×10",
    subtitle: "The Churning of the Ocean & Immortal Amrita",
    difficulty: "Expedition Master (★★★★☆)",
    difficultyStars: "✦ Indian",
    traditions: "Indian Vedic Tradition",
    rows: 10,
    cols: 10,
    words: [
      { num: 1, dir: 'A', word: 'SHIVA', r: 0, c: 2, clue: 'The great ascetic Mahadeva who swallowed the cosmic poison Halahala to rescue existence.', origin: 'Indian' },
      { num: 3, dir: 'A', word: 'GARUDA', r: 1, c: 0, clue: 'The majestic solar king of avians, conqueror of serpents and divine mount of Vishnu.', origin: 'Indian' },
      { num: 5, dir: 'A', word: 'VISHNU', r: 2, c: 3, clue: 'The cosmic preserver who assumed the Kurma tortoise avatar to anchor Mount Mandara.', origin: 'Indian' },
      { num: 6, dir: 'A', word: 'AMRITA', r: 5, c: 2, clue: 'The supreme celestial nectar of immortality yielded by the Samudra Manthan.', origin: 'Indian' },
      { num: 2, dir: 'D', word: 'VASUKI', r: 0, c: 5, clue: 'The colossal king of naga serpents coiled around Mount Mandara as the churning rope.', origin: 'Indian' },
      { num: 4, dir: 'D', word: 'ASURA', r: 1, c: 1, clue: 'Mighty supernatural titans who held the venomous serpent head during the cosmic churning.', origin: 'Indian' }
    ]
  }
];

let currentCwLevelIdx = 0;
const solvedCwLevels = new Set();

const cwBoard = document.getElementById('crossword-grid-board');
const acrossCluesList = document.getElementById('across-clues-list');
const downCluesList = document.getElementById('down-clues-list');
const cwStatusBanner = document.getElementById('crossword-status-banner');
const cwLevelTabs = document.querySelectorAll('.cw-level-tab');
const cwActiveTitle = document.getElementById('cw-active-title');
const cwActiveSub = document.getElementById('cw-active-sub');
const cwBadgeDiff = document.getElementById('cw-badge-diff');
const cwBadgeWords = document.getElementById('cw-badge-words');
const cwBadgeTraditions = document.getElementById('cw-badge-traditions');
const btnCwPrevLvl = document.getElementById('btn-cw-prev-lvl');
const btnCwNextLvl = document.getElementById('btn-cw-next-lvl');

let selectedClue = null;

function buildCrossword(levelIdentifier = 0) {
  if (typeof levelIdentifier === 'string') {
    const foundIdx = CROSSWORD_LEVELS.findIndex(p => String(p.id) === levelIdentifier);
    if (foundIdx !== -1) {
      currentCwLevelIdx = foundIdx;
    } else {
      const parsed = parseInt(levelIdentifier, 10);
      if (!isNaN(parsed)) currentCwLevelIdx = Math.max(0, Math.min(CROSSWORD_LEVELS.length - 1, parsed - 1));
    }
  } else if (typeof levelIdentifier === 'number') {
    currentCwLevelIdx = Math.max(0, Math.min(CROSSWORD_LEVELS.length - 1, levelIdentifier));
  }
  const puzzle = CROSSWORD_LEVELS[currentCwLevelIdx];

  cwBoard.innerHTML = '';
  acrossCluesList.innerHTML = '';
  downCluesList.innerHTML = '';
  cwStatusBanner.textContent = '';

  // Update dynamic grid dimensions
  cwBoard.style.gridTemplateColumns = `repeat(${puzzle.cols}, 36px)`;
  cwBoard.style.gridTemplateRows = `repeat(${puzzle.rows}, 36px)`;

  // Update metadata card
  if (cwActiveTitle) cwActiveTitle.textContent = puzzle.title;
  if (cwActiveSub) cwActiveSub.textContent = puzzle.subtitle;
  if (cwBadgeDiff) cwBadgeDiff.textContent = `Difficulty: ${puzzle.difficulty}`;
  if (cwBadgeWords) cwBadgeWords.textContent = `${puzzle.words.length} Interconnected Words`;
  if (cwBadgeTraditions) cwBadgeTraditions.textContent = puzzle.traditions;

  // Update level tabs UI
  cwLevelTabs.forEach(tab => {
    const isThisTab = String(tab.dataset.cwLvl) === String(puzzle.id);
    tab.classList.toggle('is-active', isThisTab);
    tab.setAttribute('aria-selected', String(isThisTab));
    if (solvedCwLevels.has(puzzle.id) && isThisTab) {
      tab.classList.add('is-solved');
    }
  });

  const cellMap = {};
  puzzle.words.forEach(w => {
    const isDown = w.dir === 'D';
    for (let i = 0; i < w.word.length; i++) {
      const r = isDown ? w.r + i : w.r;
      const c = isDown ? w.c : w.c + i;
      const key = `${r}_${c}`;
      if (!cellMap[key]) {
        cellMap[key] = { letter: w.word[i], num: (i === 0) ? w.num : null, words: [w] };
      } else {
        cellMap[key].words.push(w);
        if (i === 0) cellMap[key].num = w.num;
      }
    }
  });

  for (let r = 0; r < puzzle.rows; r++) {
    for (let c = 0; c < puzzle.cols; c++) {
      const key = `${r}_${c}`;
      const cellData = cellMap[key];
      const cell = document.createElement('div');
      cell.className = 'cw-cell';
      cell.dataset.row = r;
      cell.dataset.col = c;

      if (cellData) {
        cell.classList.add('active-cell');
        if (cellData.num) {
          const numSpan = document.createElement('span');
          numSpan.className = 'cw-cell-num';
          numSpan.textContent = cellData.num;
          cell.appendChild(numSpan);
        }
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'cw-input';
        input.dataset.expected = cellData.letter;
        input.dataset.row = r;
        input.dataset.col = c;

        input.addEventListener('input', () => {
          input.value = input.value.toUpperCase();
          input.classList.remove('is-correct', 'is-wrong');
          if (input.value) {
            audio.playCardFlip();
            advanceCursor(r, c);
          }
        });

        input.addEventListener('keydown', e => {
          if (e.key === 'Backspace' && !input.value) {
            retreatCursor(r, c);
          }
        });

        input.addEventListener('focus', () => {
          highlightCellClues(cellData.words[0]);
        });

        cell.appendChild(input);
      }
      cwBoard.appendChild(cell);
    }
  }

  // Render Across Clues
  puzzle.words.filter(w => w.dir === 'A').forEach(w => {
    const item = document.createElement('div');
    item.className = 'clue-item';
    item.dataset.wordId = `${w.dir}_${w.num}`;
    item.innerHTML = `
      <span class="clue-num">${w.num}.</span>
      <span>${w.clue}</span>
      <span class="clue-origin-tag">${w.origin}</span>
    `;
    item.addEventListener('click', () => selectClue(w));
    acrossCluesList.appendChild(item);
  });

  // Render Down Clues
  puzzle.words.filter(w => w.dir === 'D').forEach(w => {
    const item = document.createElement('div');
    item.className = 'clue-item';
    item.dataset.wordId = `${w.dir}_${w.num}`;
    item.innerHTML = `
      <span class="clue-num">${w.num}.</span>
      <span>${w.clue}</span>
      <span class="clue-origin-tag">${w.origin}</span>
    `;
    item.addEventListener('click', () => selectClue(w));
    downCluesList.appendChild(item);
  });

  selectClue(puzzle.words[0]);
  audio.playChime(480);
}

function selectClue(word) {
  selectedClue = word;
  highlightCellClues(word);
  const firstInput = cwBoard.querySelector(`.cw-input[data-row="${word.r}"][data-col="${word.c}"]`);
  if (firstInput) firstInput.focus();
}

function highlightCellClues(word) {
  if (!word) return;
  selectedClue = word;

  document.querySelectorAll('.clue-item').forEach(el => {
    el.classList.toggle('is-selected', el.dataset.wordId === `${word.dir}_${word.num}`);
  });

  document.querySelectorAll('.cw-cell').forEach(c => c.classList.remove('highlight-clue'));
  const isDown = word.dir === 'D';
  for (let i = 0; i < word.word.length; i++) {
    const r = isDown ? word.r + i : word.r;
    const c = isDown ? word.c : word.c + i;
    const cell = cwBoard.querySelector(`.cw-cell[data-row="${r}"][data-col="${c}"]`);
    if (cell) cell.classList.add('highlight-clue');
  }
}

function advanceCursor(r, c) {
  if (!selectedClue) return;
  const isDown = selectedClue.dir === 'D';
  const nextR = isDown ? r + 1 : r;
  const nextC = isDown ? c : c + 1;
  const nextInput = cwBoard.querySelector(`.cw-input[data-row="${nextR}"][data-col="${nextC}"]`);
  if (nextInput) nextInput.focus();
}

function retreatCursor(r, c) {
  if (!selectedClue) return;
  const isDown = selectedClue.dir === 'D';
  const prevR = isDown ? r - 1 : r;
  const prevC = isDown ? c : c - 1;
  const prevInput = cwBoard.querySelector(`.cw-input[data-row="${prevR}"][data-col="${prevC}"]`);
  if (prevInput) prevInput.focus();
}

// Check Word button
document.getElementById('btn-cw-check-word').addEventListener('click', () => {
  if (!selectedClue) return;
  const isDown = selectedClue.dir === 'D';
  let allCorrect = true;
  for (let i = 0; i < selectedClue.word.length; i++) {
    const r = isDown ? selectedClue.r + i : selectedClue.r;
    const c = isDown ? selectedClue.c : selectedClue.c + i;
    const inp = cwBoard.querySelector(`.cw-input[data-row="${r}"][data-col="${c}"]`);
    if (inp) {
      if (inp.value === selectedClue.word[i]) {
        inp.classList.add('is-correct');
        inp.classList.remove('is-wrong');
      } else {
        inp.classList.add('is-wrong');
        allCorrect = false;
      }
    }
  }
  if (allCorrect) {
    audio.playCorrect();
    cwStatusBanner.textContent = `✓ "${selectedClue.word}" is correct!`;
  } else {
    audio.playWrong();
    cwStatusBanner.textContent = `Check letters for "${selectedClue.word}"`;
  }
});

// Reveal Word button
document.getElementById('btn-cw-reveal-word').addEventListener('click', () => {
  if (!selectedClue) return;
  const isDown = selectedClue.dir === 'D';
  for (let i = 0; i < selectedClue.word.length; i++) {
    const r = isDown ? selectedClue.r + i : selectedClue.r;
    const c = isDown ? selectedClue.c : selectedClue.c + i;
    const inp = cwBoard.querySelector(`.cw-input[data-row="${r}"][data-col="${c}"]`);
    if (inp) {
      inp.value = selectedClue.word[i];
      inp.classList.add('is-correct');
      inp.classList.remove('is-wrong');
    }
  }
  audio.playChime(600);
});

// Check Entire Puzzle button
document.getElementById('btn-cw-check-all').addEventListener('click', () => {
  const inputs = cwBoard.querySelectorAll('.cw-input');
  let correctCount = 0;
  inputs.forEach(inp => {
    if (inp.value === inp.dataset.expected) {
      inp.classList.add('is-correct');
      inp.classList.remove('is-wrong');
      correctCount++;
    } else if (inp.value) {
      inp.classList.add('is-wrong');
    }
  });

  const puzzle = CROSSWORD_LEVELS[currentCwLevelIdx];
  if (correctCount === inputs.length) {
    audio.playFanfare();
    solvedCwLevels.add(puzzle.id);
    const activeTab = document.querySelector(`.cw-level-tab[data-cw-lvl="${puzzle.id}"]`);
    if (activeTab) activeTab.classList.add('is-solved');

    if (currentCwLevelIdx < CROSSWORD_LEVELS.length - 1) {
      const nextPz = CROSSWORD_LEVELS[currentCwLevelIdx + 1];
      cwStatusBanner.innerHTML = `
        <div style="padding:10px 14px;background:rgba(0,230,118,0.15);border:1px solid #00E676;border-radius:6px;margin-top:10px;">
          <strong style="color:#00E676;">👑 Outstanding! ${puzzle.title} Completely Solved!</strong>
          <p style="margin:4px 0 8px;font-size:0.88rem;color:var(--text-parchment);">Ready for greater mythological depths?</p>
          <button type="button" class="level-advance-btn" id="btn-next-cw-inline" style="padding:6px 16px;font-size:0.86rem;">
            Proceed to Level ${nextPz.id} (${nextPz.title}) →
          </button>
        </div>
      `;
      const nextBtn = document.getElementById('btn-next-cw-inline');
      if (nextBtn) nextBtn.addEventListener('click', () => buildCrossword(currentCwLevelIdx + 1));
    } else {
      cwStatusBanner.innerHTML = `
        <div style="padding:12px 16px;background:rgba(229,169,59,0.15);border:1px solid var(--pantheon-accent);border-radius:6px;margin-top:10px;">
          <strong style="color:var(--pantheon-accent);font-size:1.05rem;">👑 Master of All Cryptids & Primeval Titans! 👑</strong>
          <p style="margin:4px 0 0;font-size:0.9rem;color:var(--text-parchment);">You have solved all 5 legendary crossword levels across seven ancient civilizations!</p>
        </div>
      `;
    }
  } else {
    cwStatusBanner.textContent = `${correctCount} of ${inputs.length} letters correct. Keep going!`;
  }
});

// Clear Grid button
document.getElementById('btn-cw-clear').addEventListener('click', () => {
  cwBoard.querySelectorAll('.cw-input').forEach(inp => {
    inp.value = '';
    inp.classList.remove('is-correct', 'is-wrong');
  });
  cwStatusBanner.textContent = 'Grid cleared.';
  audio.playChime(350);
});

// Previous Level button
if (btnCwPrevLvl) {
  btnCwPrevLvl.addEventListener('click', () => {
    if (currentCwLevelIdx > 0) {
      buildCrossword(currentCwLevelIdx - 1);
    } else {
      audio.playWrong();
    }
  });
}

// Next Level button
if (btnCwNextLvl) {
  btnCwNextLvl.addEventListener('click', () => {
    if (currentCwLevelIdx < CROSSWORD_LEVELS.length - 1) {
      buildCrossword(currentCwLevelIdx + 1);
    } else {
      audio.playWrong();
    }
  });
}

// Reveal Letter hint button
const btnCwRevealLetter = document.getElementById('btn-cw-reveal-letter');
if (btnCwRevealLetter) {
  btnCwRevealLetter.addEventListener('click', () => {
    const activeEl = document.activeElement;
    let targetInput = null;
    if (activeEl && activeEl.classList.contains('cw-input') && !activeEl.disabled) {
      targetInput = activeEl;
    } else {
      // Find first empty cell in selected clue or grid
      const inputs = Array.from(cwBoard.querySelectorAll('.cw-input:not([disabled])'));
      targetInput = inputs.find(inp => !inp.value) || inputs[0];
    }
    if (!targetInput) return;

    const row = Number(targetInput.closest('.cw-cell').dataset.row);
    const col = Number(targetInput.closest('.cw-cell').dataset.col);
    const puzzle = CROSSWORD_LEVELS[currentCwLevelIdx];
    
    let expectedChar = targetInput.dataset.expected || '';
    if (!expectedChar) {
      puzzle.words.forEach(w => {
        const isDown = w.dir === 'D';
        for (let i = 0; i < w.word.length; i++) {
          const r = isDown ? w.r + i : w.r;
          const c = isDown ? w.c : w.c + i;
          if (r === row && c === col) expectedChar = w.word[i];
        }
      });
    }

    if (expectedChar) {
      targetInput.value = expectedChar;
      targetInput.classList.remove('is-wrong');
      targetInput.classList.add('is-correct');
      const cellParent = targetInput.closest('.cw-cell');
      if (cellParent) {
        cellParent.classList.remove('is-revealed');
        void cellParent.offsetWidth; // trigger reflow
        cellParent.classList.add('is-revealed');
      }
      audio.playChime(620);
      cwStatusBanner.textContent = `Revealed letter '${expectedChar}' at row ${row + 1}, col ${col + 1}.`;
      advanceCursor(row, col);
    }
  });
}

// Level tab buttons
cwLevelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    buildCrossword(tab.dataset.cwLvl);
  });
});

// Print Worksheet button
document.getElementById('btn-cw-print').addEventListener('click', () => {
  const pz = CROSSWORD_LEVELS[currentCwLevelIdx];
  const printTitle = document.getElementById('print-cw-title');
  const printMeta = document.getElementById('print-cw-meta');
  if (printTitle) printTitle.textContent = `Veilweave — ${pz.title}`;
  if (printMeta) printMeta.textContent = `Difficulty: ${pz.difficulty} • Name: ____________________ Date: ________ Score: _____`;
  window.print();
});

// Initialize Level 1
buildCrossword(0);


/* ==========================================================================
   SECTION 9: MYTHOS SPARK (CREATIVE STORY FORGE)
   ========================================================================== */
const SPARK_DATA = {
  archetypes: {
    trickster: { name: "The Cunning Trickster", epithet: "spinner of riddles and breaker of thrones" },
    sunbearer: { name: "The Reluctant Sunbearer", epithet: "whose shoulders carry the scorching weight of daylight" },
    weaver: { name: "The Weaver of Fates", epithet: "who counts every breath in strands of silver and gold" },
    shadow: { name: "The Shadow Guide of Souls", epithet: "guardian of the silent threshold between life and starlight" },
    smith: { name: "The Celestial Blacksmith", epithet: "who hammers falling meteorites into weapons of harmony" },
    wanderer: { name: "The Ageless Wanderer", epithet: "who has tasted the spring waters of all seven realms" }
  },
  elements: {
    flame: { name: "Living Celestial Ember", nature: "never burns wood, but consumes lies and false oaths" },
    roots: { name: "Roots of the World Tree", nature: "anchors the realms against the cosmic void" },
    abyss: { name: "The Singing Abyssal Tide", nature: "whispers the forgotten names of ancient stars" },
    stardust: { name: "Bone Dust & Starlight", nature: "the primordial clay from which first mortals were molded" },
    mirror: { name: "The Obsidian Mirror", nature: "reveals not one's physical reflection, but one's deepest destiny" },
    storm: { name: "Thunder of the Forgotten Peak", nature: "echoes with the first word spoken at the dawn of creation" }
  },
  conflicts: {
    steal_fire: {
      suffix: "and the Stolen Dawn",
      lore: "stole the element from the highest sanctum of the gods to save mortal villages from eternal freeze.",
      prompt: "Describe the moment the protagonist is cornered at the mountain pass: do they swallow the relic to conceal it, or whisper the one truth that could unleash its fury?"
    },
    broken_scale: {
      suffix: "and the Shattered Scale",
      lore: "discovered that the sacred scale of truth has fractured, causing every spoken lie to materialize as a physical beast.",
      prompt: "Your protagonist must navigate a marketplace where spoken lies take physical form. How do they barter when honesty is the rarest commodity?"
    },
    lost_sun: {
      suffix: "under the Swallowed Sun",
      lore: "witnessed the sun beast engulf daylight, plunging the realms into an icy panic where shadows speak.",
      prompt: "Write the dialogue between the seeker and the sun beast inside its subterranean cavern before the final eclipse completes."
    },
    curse_truth: {
      suffix: "of the Burning Tongue",
      lore: "was cursed so that whenever they speak absolute truth, their words scorch the listeners' ears with living flame.",
      prompt: "How does the prophet deliver a dire warning of impending doom without turning their audience into ash?"
    },
    final_thread: {
      suffix: "and the Unraveled Thread",
      lore: "holds the very last thread of mortal memory as the celestial tapestry slowly unravels from the edges.",
      prompt: "What single memory do they choose to preserve for the next universe, and what will they sacrifice to keep it intact?"
    }
  }
};

const selectArchetype = document.getElementById('select-archetype');
const selectElement = document.getElementById('select-element');
const selectConflict = document.getElementById('select-conflict');
const btnForgeSpark = document.getElementById('btn-forge-spark');
const btnRandomSpark = document.getElementById('btn-random-spark');
const btnCopyPrompt = document.getElementById('btn-copy-prompt');
const btnSaveSpark = document.getElementById('btn-save-spark');
const copyBtnText = document.getElementById('copy-btn-text');
const saveBtnText = document.getElementById('save-btn-text');
const sparkTag = document.getElementById('spark-tag');
const sparkTitle = document.getElementById('spark-title');
const sparkLore = document.getElementById('spark-lore');
const sparkPrompt = document.getElementById('spark-prompt');
const savedSparksList = document.getElementById('saved-sparks-list');
const btnClearSparks = document.getElementById('btn-clear-sparks');

let currentSpark = null;

const btnSparkShare = document.getElementById('btn-spark-share');
const btnSparkPdf = document.getElementById('btn-spark-pdf');
const btnExportPdf = document.getElementById('btn-export-pdf');
const btnExportJson = document.getElementById('btn-export-json');
const btnExportTxt = document.getElementById('btn-export-txt');

function forgeSpark() {
  const a = SPARK_DATA.archetypes[selectArchetype.value] || SPARK_DATA.archetypes.trickster;
  const e = SPARK_DATA.elements[selectElement.value] || SPARK_DATA.elements.flame;
  const c = SPARK_DATA.conflicts[selectConflict.value] || SPARK_DATA.conflicts.steal_fire;

  const title = `${a.name} ${c.suffix}`;
  const lore = `In an age before mortal reckoning, ${a.name} (${a.epithet}) came into possession of ${e.name}. This primordial relic, which ${e.nature}, ${c.lore}`;
  const prompt = c.prompt;
  const tag = `${e.name} • ${a.name}`;

  sparkTag.textContent = tag;
  sparkTitle.textContent = title;
  sparkLore.textContent = lore;
  sparkPrompt.textContent = prompt;

  currentSpark = { id: Date.now(), title, lore, prompt, tag };
  if (copyBtnText) copyBtnText.textContent = '📋 Copy Story Prompt';
  if (saveBtnText) saveBtnText.textContent = '💾 Save to My Codex';
  audio.playCorrect();
}

function randomizeSpark() {
  const ak = Object.keys(SPARK_DATA.archetypes);
  const ek = Object.keys(SPARK_DATA.elements);
  const ck = Object.keys(SPARK_DATA.conflicts);
  selectArchetype.value = ak[Math.floor(Math.random() * ak.length)];
  selectElement.value = ek[Math.floor(Math.random() * ek.length)];
  selectConflict.value = ck[Math.floor(Math.random() * ck.length)];
  forgeSpark();
}

function copySpark(sparkObj = null) {
  const s = sparkObj || currentSpark;
  if (!s) return;
  const txt = `"${s.title}"\n\nLore: ${s.lore || ''}\n\nCreative Writing Prompt: ${s.prompt}\n\n— Generated by Veilweave Codex`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(txt).then(() => {
      if (copyBtnText && (!sparkObj || sparkObj === currentSpark)) {
        copyBtnText.textContent = '✓ Copied to Clipboard!';
        setTimeout(() => { copyBtnText.textContent = '📋 Copy Story Prompt'; }, 2000);
      } else {
        alert('Copied legend prompt to clipboard!');
      }
    });
  }
  audio.playChime(600);
}

function shareSpark(sparkObj = null) {
  const s = sparkObj || currentSpark;
  if (!s) return;
  const shareData = {
    title: `Veilweave Legend: ${s.title}`,
    text: `"${s.title}"\n\nCreative Writing Prompt: ${s.prompt}\n\nExplore mythical lore on Veilweave:`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(err => {
      if (err.name !== 'AbortError') copySpark(s);
    });
  } else {
    copySpark(s);
  }
}

function saveSpark() {
  if (!currentSpark) return;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
    if (!saved.some(s => s.title === currentSpark.title)) {
      saved.unshift(currentSpark);
      localStorage.setItem(STORAGE_KEYS.SAVED_SPARKS, JSON.stringify(saved));
      renderSavedSparks();
      saveBtnText.textContent = '✓ Saved in Codex!';
    } else {
      saveBtnText.textContent = 'Already in Codex';
    }
    setTimeout(() => { saveBtnText.textContent = '💾 Save to My Codex'; }, 2000);
    audio.playChime(700);
  } catch {}
}

function printMythCardParchment(sparksList) {
  const container = document.getElementById('printable-myth-card');
  if (!container) return;

  if (!sparksList || !sparksList.length) {
    alert('No myth cards available to print. Ignite or save some sparks first!');
    return;
  }

  container.innerHTML = sparksList.map(s => `
    <article class="myth-card-parchment">
      <header class="myth-card-header">
        <span class="myth-card-badge">${s.tag || 'Veilweave Mythic Lore Codex'}</span>
        <h2 class="myth-card-title">${s.title}</h2>
      </header>
      <div class="myth-card-lore">${s.lore || 'Forged in the timeless loom of Veilweave, where ancient mythologies converge into living creative sparks.'}</div>
      <div class="myth-card-prompt-box">
        <span class="myth-card-prompt-label">Creative Writing Challenge</span>
        <p class="myth-card-prompt-text">"${s.prompt}"</p>
      </div>
      <footer class="myth-card-footer-mark">
        <span>Veilweave • Global Mythological Codex</span>
        <span>Generated: ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      </footer>
    </article>
  `).join('');

  document.body.classList.add('printing-myth-card');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-myth-card');
  }, 1000);
}

function exportCodexJSON() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
  const listToExport = saved.length ? saved : (currentSpark ? [currentSpark] : []);
  if (!listToExport.length) {
    alert('Your Codex is currently empty. Ignite or save some sparks first!');
    return;
  }

  const exportData = {
    app: "Veilweave - Myths of the World",
    version: "2.0",
    exportDate: new Date().toISOString(),
    totalSparks: listToExport.length,
    codex: listToExport
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const a = document.createElement('a');
  a.setAttribute("href", dataStr);
  a.setAttribute("download", `veilweave-codex-${Date.now()}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
  audio.playChime(640);
}

function exportCodexText() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
  const listToExport = saved.length ? saved : (currentSpark ? [currentSpark] : []);
  if (!listToExport.length) {
    alert('Your Codex is currently empty. Ignite or save some sparks first!');
    return;
  }

  let txt = "========================================================================\n";
  txt += "                    VEILWEAVE: MYTHOS CODEX ARCHIVE                     \n";
  txt += "========================================================================\n";
  txt += `Generated: ${new Date().toLocaleString()}\n`;
  txt += `Total Legends: ${listToExport.length}\n\n`;

  listToExport.forEach((s, idx) => {
    txt += `[${idx + 1}] ${s.title.toUpperCase()}\n`;
    if (s.tag) txt += `Tradition / Concept: ${s.tag}\n`;
    if (s.lore) txt += `Lore Excerpt:\n${s.lore}\n`;
    txt += `Writing Prompt:\n"${s.prompt}"\n`;
    txt += "------------------------------------------------------------------------\n\n";
  });

  txt += "Veilweave — Exploring the Living Tapestry of Seven Global Mythological Traditions.\n";

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `veilweave-codex-${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  audio.playChime(640);
}

function renderSavedSparks() {
  if (!savedSparksList) return;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
    if (saved.length === 0) {
      savedSparksList.innerHTML = '<p class="no-sparks-notice">No saved sparks yet. Ignite your first legend above!</p>';
      return;
    }
    savedSparksList.innerHTML = '';
    saved.forEach(s => {
      const card = document.createElement('div');
      card.className = 'saved-spark-card';
      card.innerHTML = `
        <div>
          <div class="saved-spark-title">${s.title}</div>
          <p class="saved-spark-prompt">${s.prompt}</p>
        </div>
        <div class="saved-spark-actions">
          <button class="saved-spark-action-btn btn-card-copy" data-id="${s.id}">📋 Copy</button>
          <button class="saved-spark-action-btn btn-card-share" data-id="${s.id}">🔗 Share</button>
          <button class="saved-spark-action-btn btn-card-pdf" data-id="${s.id}">📄 PDF</button>
          <button class="saved-spark-action-btn saved-spark-del" data-id="${s.id}">✕</button>
        </div>
      `;
      savedSparksList.appendChild(card);
    });

    savedSparksList.querySelectorAll('.btn-card-copy').forEach(b => {
      b.addEventListener('click', () => {
        const id = Number(b.dataset.id);
        const target = saved.find(x => x.id === id);
        if (target) copySpark(target);
      });
    });

    savedSparksList.querySelectorAll('.btn-card-share').forEach(b => {
      b.addEventListener('click', () => {
        const id = Number(b.dataset.id);
        const target = saved.find(x => x.id === id);
        if (target) shareSpark(target);
      });
    });

    savedSparksList.querySelectorAll('.btn-card-pdf').forEach(b => {
      b.addEventListener('click', () => {
        const id = Number(b.dataset.id);
        const target = saved.find(x => x.id === id);
        if (target) printMythCardParchment([target]);
      });
    });

    savedSparksList.querySelectorAll('.saved-spark-del').forEach(b => {
      b.addEventListener('click', () => {
        const id = Number(b.dataset.id);
        const filtered = saved.filter(x => x.id !== id);
        localStorage.setItem(STORAGE_KEYS.SAVED_SPARKS, JSON.stringify(filtered));
        renderSavedSparks();
      });
    });
  } catch {}
}

if (btnForgeSpark) btnForgeSpark.addEventListener('click', forgeSpark);
if (btnRandomSpark) btnRandomSpark.addEventListener('click', randomizeSpark);
if (btnCopyPrompt) btnCopyPrompt.addEventListener('click', () => copySpark());
if (btnSaveSpark) btnSaveSpark.addEventListener('click', saveSpark);
if (btnSparkShare) btnSparkShare.addEventListener('click', () => shareSpark());
if (btnSparkPdf) btnSparkPdf.addEventListener('click', () => {
  if (currentSpark) printMythCardParchment([currentSpark]);
});
if (btnExportPdf) btnExportPdf.addEventListener('click', () => {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
  if (saved.length) printMythCardParchment(saved);
  else if (currentSpark) printMythCardParchment([currentSpark]);
  else alert('Your Codex is currently empty. Ignite or save some sparks first!');
});
if (btnExportJson) btnExportJson.addEventListener('click', exportCodexJSON);
if (btnExportTxt) btnExportTxt.addEventListener('click', exportCodexText);

if (btnClearSparks) {
  btnClearSparks.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.SAVED_SPARKS);
    renderSavedSparks();
  });
}

forgeSpark();
renderSavedSparks();


/* ==========================================================================
   SECTION 10: INTERACTIVE MYTHIC ARTIFACT RELIC MUSEUM (3D PERSPECTIVE)
   ========================================================================== */
const MYTHIC_RELICS = [
  {
    id: 'ankh',
    cultureKey: 'egypt',
    cultureLabel: 'Egypt • The Nile Valley',
    accentColor: '#E5A93B',
    glowColor: 'rgba(229, 169, 59, 0.45)',
    name: 'The Ankh of Everlasting Breath',
    sub: 'The Pharaonic Key of Life & Solar Eternity',
    origin: 'Valley of the Kings • Ancient Thebes',
    material: 'Gilded Electrum, Lapis Lazuli & Carnelian',
    power: 'Bestows vital breath (Ka) and guides righteous hearts across the Duat.',
    desc: 'Excavated from pharaonic sanctums along the Nile, the Ankh represents the divine breath of eternal existence. Gods and pharaohs are depicted holding it by the loop to touch the lips of kings and departed souls, conferring rebirth and the unending flow of life.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <radialGradient id="ankh-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E5A93B"/><stop offset="100%" stop-color="#B81D24"/>
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="30" rx="16" ry="20" fill="none" stroke="url(#ankh-glow)" stroke-width="6"/>
      <ellipse cx="50" cy="30" rx="9" ry="13" fill="none" stroke="#F5F2EB" stroke-width="2" opacity="0.6"/>
      <path d="M22 52 L78 52" stroke="url(#ankh-glow)" stroke-width="6" stroke-linecap="round"/>
      <path d="M26 52 L74 52" stroke="#F5F2EB" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <line x1="50" y1="52" x2="50" y2="92" stroke="url(#ankh-glow)" stroke-width="6" stroke-linecap="round"/>
      <line x1="50" y1="55" x2="50" y2="89" stroke="#F5F2EB" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <circle cx="50" cy="52" r="4" fill="#0F2042" stroke="#E5A93B" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 'aegis',
    cultureKey: 'greek',
    cultureLabel: 'Greek • Mount Olympus',
    accentColor: '#007799',
    glowColor: 'rgba(212, 175, 55, 0.45)',
    name: 'The Aegis of Athena',
    sub: 'The Gorgon-Headed Divine Battle Shield',
    origin: 'Mount Olympus • Forged by Hephaestus',
    material: 'Olympian Bronze, Goatskin Fringe & Star Metal',
    power: 'Paralyzes malice with divine dread and deflects cosmic thunderbolts.',
    desc: 'Forged by the divine smith Hephaestus and borne into cosmic war by Athena and Zeus. Emblazoned with the terrifying golden head of the Gorgon Medusa and fringed with one hundred serpents, shaking the Aegis cast overwhelming panic into the ranks of the unjust.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <radialGradient id="aegis-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#D4AF37"/><stop offset="80%" stop-color="#007799"/><stop offset="100%" stop-color="#0B1526"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#aegis-grad)" stroke="#D4AF37" stroke-width="3"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="#F0F4F8" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>
      <circle cx="50" cy="48" r="15" fill="#2D5A27" stroke="#D4AF37" stroke-width="2"/>
      <circle cx="44" cy="46" r="2.5" fill="#F0F4F8"/>
      <circle cx="56" cy="46" r="2.5" fill="#F0F4F8"/>
      <path d="M44 54 Q50 59 56 54" stroke="#D4AF37" stroke-width="2" fill="none"/>
      <path d="M50 8 C40 4 35 12 40 18 M50 92 C60 96 65 88 60 82 M8 50 C4 60 12 65 18 60 M92 50 C96 40 88 35 82 40" stroke="#D4AF37" stroke-width="2.5" fill="none"/>
    </svg>`
  },
  {
    id: 'obsidian_mirror',
    cultureKey: 'aztec',
    cultureLabel: 'Aztec • Lake Texcoco',
    accentColor: '#C0392B',
    glowColor: 'rgba(243, 156, 18, 0.45)',
    name: 'The Smoking Obsidian Mirror',
    sub: 'Tezcatlipoca\'s Portal of Shadows & Truth',
    origin: 'Great Temple of Tenochtitlan',
    material: 'Polished Volcanic Glass, Quetzal Jade & Solar Gold',
    power: 'Unveils mortal conscience, pierces illusions & scries cosmic destinies.',
    desc: 'Crafted from flawless volcanic obsidian glass, Tezcatlipoca\'s smoking mirror was used by high priests for divination and prophecy. It reflects not merely the physical form, but the hidden memories, shadows, and cosmic deeds of mortal souls.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <linearGradient id="obsidian-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2C3E50"/><stop offset="50%" stop-color="#111111"/><stop offset="100%" stop-color="#000000"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#F39C12" stroke-width="4"/>
      <circle cx="50" cy="50" r="39" fill="none" stroke="#00A86B" stroke-width="2"/>
      <circle cx="50" cy="50" r="35" fill="url(#obsidian-glass)"/>
      <path d="M26 30 Q45 22 65 30 Q50 36 26 30 Z" fill="#F5F2EB" opacity="0.35"/>
      <path d="M35 70 Q42 55 50 62 T65 52" stroke="#C0392B" stroke-width="2.5" fill="none" opacity="0.8"/>
      <path d="M40 75 Q48 62 55 68" stroke="#F39C12" stroke-width="2" fill="none" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'mjolnir',
    cultureKey: 'norse',
    cultureLabel: 'Norse • Asgard & Midgard',
    accentColor: '#4A90E2',
    glowColor: 'rgba(0, 229, 255, 0.45)',
    name: 'Mjölnir, Hammer of the Storms',
    sub: 'The Mountain-Cleaving Thunderstone',
    origin: 'Svartalfheim Dwarven Forges',
    material: 'Cosmic Steel, Dwarven Runes & Runic Leather',
    power: 'Summons crushing thunderstorms and returns unfailingly to the wielder.',
    desc: 'Forged by the master dark-elven smiths Brokkr and Sindri, Mjölnir can level mountain ranges with a single strike and summon roaring aurora storms. Worn as protective amulets throughout Viking Scandinavia to bless weddings, shield warriors, and hallow sacred grounds.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <linearGradient id="mjolnir-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8E9AAF"/><stop offset="50%" stop-color="#4A90E2"/><stop offset="100%" stop-color="#0B132B"/>
        </linearGradient>
      </defs>
      <polygon points="18,32 82,32 86,52 14,52" fill="url(#mjolnir-metal)" stroke="#00E5FF" stroke-width="2"/>
      <polygon points="26,24 74,24 78,32 22,32" fill="#4A90E2" stroke="#00E5FF" stroke-width="1.5"/>
      <circle cx="50" cy="42" r="5" fill="none" stroke="#00E5FF" stroke-width="1.5"/>
      <line x1="45" y1="42" x2="55" y2="42" stroke="#00E5FF" stroke-width="1.5"/>
      <rect x="44" y="52" width="12" height="32" rx="2" fill="#3D2619" stroke="#8E9AAF" stroke-width="1.5"/>
      <line x1="44" y1="62" x2="56" y2="62" stroke="#00E5FF" stroke-width="1"/>
      <line x1="44" y1="72" x2="56" y2="72" stroke="#00E5FF" stroke-width="1"/>
      <ellipse cx="50" cy="88" rx="8" ry="4" fill="none" stroke="#00E5FF" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'jade_dragon_bi',
    cultureKey: 'chinese',
    cultureLabel: 'Chinese • Zhou & Han Dynasties',
    accentColor: '#D90429',
    glowColor: 'rgba(217, 4, 41, 0.45)',
    name: 'Imperial Jade Dragon Bi (玉璧)',
    sub: 'The Celestial Conduit of the Mandate of Heaven',
    origin: 'Luoyang • Central Plains of Ancient China',
    material: 'Nephrite Hetian Jade with Coiling Dragon Reliefs',
    power: 'Harmonizes Yin and Yang, connecting earthly rulers with Tianming (The Mandate of Heaven).',
    desc: 'Excavated from imperial royal tombs along the Yellow River basin, the Bi is a circular jade disc with a sacred central orifice representing the infinite heavens. Intertwined with coiled cloud-dragons, it served in high state rituals where emperors prayed for cosmic harmony, bountiful rainfall, and moral governance.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <radialGradient id="chinese-jade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00C47D"/>
          <stop offset="60%" stop-color="#00A86B"/>
          <stop offset="100%" stop-color="#0A4D32"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#chinese-jade)" stroke="#D90429" stroke-width="2"/>
      <circle cx="50" cy="50" r="16" fill="#0B0F19" stroke="#E5A823" stroke-width="2"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#E5A823" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
      <path d="M22 50 A28 28 0 0 1 50 22" fill="none" stroke="#F5F2EB" stroke-width="1.5" opacity="0.8"/>
      <path d="M78 50 A28 28 0 0 1 50 78" fill="none" stroke="#F5F2EB" stroke-width="1.5" opacity="0.8"/>
      <circle cx="32" cy="36" r="3" fill="#D90429"/>
      <circle cx="68" cy="64" r="3" fill="#D90429"/>
    </svg>`
  },
  {
    id: 'yata_mirror',
    cultureKey: 'japanese',
    cultureLabel: 'Japanese • Ise Grand Shrine',
    accentColor: '#FFB7C5',
    glowColor: 'rgba(255, 183, 197, 0.45)',
    name: 'Yata no Kagami (Sacred Bronze Mirror)',
    sub: 'The Mirror of Amaterasu\'s Radiant Wisdom',
    origin: 'Ise Grand Shrine (Imperial Regalia of Japan)',
    material: 'Sacred White Bronze, Shimenawa Hemp & Mulberry Paper',
    power: 'Mirrors the unclouded soul, banishes cosmic shadows & restores daylight.',
    desc: 'The most sacred of the Three Imperial Regalia of Japan. Hung from a sakaki tree outside the Heavenly Rock Cave, its brilliant reflection lured the sun goddess Amaterasu from seclusion, restoring dawn and warmth to the cosmos. It embodies pure wisdom and truth.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <radialGradient id="mirror-bronze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F5F2EB"/><stop offset="60%" stop-color="#FFB7C5"/><stop offset="100%" stop-color="#2D3436"/>
        </radialGradient>
      </defs>
      <polygon points="50,10 65,15 80,25 88,40 88,60 80,75 65,85 50,90 35,85 20,75 12,60 12,40 20,25 35,15" fill="#D63031" stroke="#FFB7C5" stroke-width="2"/>
      <circle cx="50" cy="50" r="32" fill="url(#mirror-bronze)" stroke="#27AE60" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="7" fill="#D63031" stroke="#FFB7C5" stroke-width="1.5"/>
      <circle cx="50" cy="35" r="3" fill="#FFB7C5"/>
      <circle cx="50" cy="65" r="3" fill="#FFB7C5"/>
      <circle cx="35" cy="50" r="3" fill="#FFB7C5"/>
      <circle cx="65" cy="50" r="3" fill="#FFB7C5"/>
    </svg>`
  },
  {
    id: 'amrita_kalasha',
    cultureKey: 'indian',
    cultureLabel: 'Indian • Kshira Sagara',
    accentColor: '#FF9933',
    glowColor: 'rgba(255, 153, 51, 0.45)',
    name: 'The Amrita Kalasha (Nectar Vessel)',
    sub: 'The Golden Urn of Cosmic Immortality',
    origin: 'Primordial Ocean of Milk (Samudra Manthan)',
    material: 'Sacred Temple Gold, Five Mango Leaves & Coconut',
    power: 'Bestows eternal youth, cures all mortal poisons & awakens supreme consciousness.',
    desc: 'Emerged from the churning of the milk ocean in the hands of Dhanvantari, the divine healer. Holding Amrita, the celestial nectar of everlasting life, it was protected by the Devas to uphold Dharma and preserve universal cosmic harmony.',
    svg: `<svg viewBox="0 0 100 100" class="relic-icon-svg">
      <defs>
        <linearGradient id="kalasha-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FF9933"/><stop offset="50%" stop-color="#E5A93B"/><stop offset="100%" stop-color="#C71585"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="55" r="38" fill="none" stroke="#FF9933" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
      <circle cx="50" cy="24" r="10" fill="#4A3F35" stroke="#E5A93B" stroke-width="1.5"/>
      <polygon points="50,14 42,32 50,28" fill="#008080"/>
      <polygon points="50,14 58,32 50,28" fill="#008080"/>
      <polygon points="34,20 44,34 38,30" fill="#008080"/>
      <polygon points="66,20 56,34 62,30" fill="#008080"/>
      <path d="M36 38 L64 38 Q74 54 68 74 Q50 84 32 74 Q26 54 36 38 Z" fill="url(#kalasha-gold)" stroke="#FF9933" stroke-width="2"/>
      <circle cx="50" cy="58" r="4" fill="#C71585"/>
      <rect x="38" y="78" width="24" height="6" rx="2" fill="#E5A93B"/>
    </svg>`
  }
];

class RelicMuseum {
  constructor() {
    this.grid = document.getElementById('relic-grid');
    this.inspector = document.getElementById('relic-inspector-card');
    this.inspectorInner = document.getElementById('relic-insp-inner');
    this.selectedRelicId = 'ankh';
    this.init();
  }

  init() {
    if (!this.grid) return;
    this.renderGrid();
  }

  renderGrid() {
    this.grid.innerHTML = '';
    MYTHIC_RELICS.forEach(relic => {
      const card = document.createElement('div');
      card.className = `relic-3d-card ${relic.id === this.selectedRelicId ? 'is-active' : ''}`;
      card.style.setProperty('--card-accent', relic.accentColor);
      card.style.setProperty('--card-glow', relic.glowColor);
      card.setAttribute('data-relic', relic.id);

      card.innerHTML = `
        <div class="relic-pedestal-glow"></div>
        <div class="relic-culture-badge">${relic.cultureLabel}</div>
        <div class="relic-svg-wrap">${relic.svg}</div>
        <h4 class="relic-name">${relic.name}</h4>
        <div class="relic-sub">${relic.sub}</div>
        <button class="relic-inspect-btn" type="button">✦ Inspect Artifact</button>
      `;

      // 3D Perspective Mouse Tracking
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -14;
        const rotateY = ((x - centerX) / centerX) * 14;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });

      card.addEventListener('click', () => {
        this.selectRelic(relic);
      });

      this.grid.appendChild(card);
    });
  }

  selectRelic(relic) {
    this.selectedRelicId = relic.id;
    this.grid.querySelectorAll('.relic-3d-card').forEach(c => {
      c.classList.toggle('is-active', c.dataset.relic === relic.id);
    });

    if (this.inspector && this.inspectorInner) {
      this.inspector.classList.remove('is-hidden');
      this.inspectorInner.innerHTML = `
        <div class="relic-insp-layout">
          <div class="relic-insp-visual">
            ${relic.svg}
            <button class="mini-btn" id="btn-relic-sound" style="margin-top:14px;" type="button">
              🎵 Chime Resonance
            </button>
          </div>
          <div class="relic-insp-content">
            <div class="relic-insp-culture">${relic.cultureLabel}</div>
            <h4>${relic.name}</h4>
            <p class="relic-insp-desc">${relic.desc}</p>
            <div class="relic-insp-meta-grid">
              <div class="relic-meta-box">
                <span class="relic-meta-label">Archaeological Origin</span>
                <span class="relic-meta-val">${relic.origin}</span>
              </div>
              <div class="relic-meta-box">
                <span class="relic-meta-label">Sacred Materials</span>
                <span class="relic-meta-val">${relic.material}</span>
              </div>
              <div class="relic-meta-box" style="grid-column: 1 / -1;">
                <span class="relic-meta-label">Mythological Power</span>
                <span class="relic-meta-val">${relic.power}</span>
              </div>
            </div>
            <div class="relic-insp-actions">
              <button class="mini-btn" id="btn-close-relic-insp" type="button">Close Inspection</button>
            </div>
          </div>
        </div>
      `;

      const btnSound = document.getElementById('btn-relic-sound');
      if (btnSound) {
        btnSound.addEventListener('click', () => {
          audio.playArtifactChime(relic.cultureKey);
        });
      }

      const btnClose = document.getElementById('btn-close-relic-insp');
      if (btnClose) {
        btnClose.addEventListener('click', () => {
          this.inspector.classList.add('is-hidden');
        });
      }

      this.inspector.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Play resonant artifact chime in the culture's scale
    audio.playArtifactChime(relic.cultureKey);
  }
}


/* ==========================================================================
   SECTION 11: INTERACTIVE CHOICE-BASED SHORT STORY VIGNETTE (MINI RPG MODE)
   ========================================================================== */
class MythicVignetteEngine {
  constructor() {
    this.container = document.getElementById('vignette-quest-container');
    this.stageBody = document.getElementById('vignette-stage-body');
    this.questTitle = document.getElementById('vignette-quest-title');
    this.step1 = document.getElementById('vstep-1');
    this.step2 = document.getElementById('vstep-2');
    this.step3 = document.getElementById('vstep-3');

    this.currentStep = 1;
    this.selectedPath = null;
    this.selectedCrucible = null;
    this.archetype = 'The Cunning Trickster';
    this.element = 'Living Celestial Ember';
    this.conflict = 'Stealing fire to save mortals from endless winter';

    this.init();
  }

  init() {
    const btnLaunch = document.getElementById('btn-start-vignette');
    if (btnLaunch) {
      btnLaunch.addEventListener('click', () => this.startQuest());
    }
  }

  readForgeContext() {
    const selArch = document.getElementById('select-archetype');
    const selElem = document.getElementById('select-element');
    const selConf = document.getElementById('select-conflict');

    if (selArch && selArch.selectedOptions[0]) {
      this.archetype = selArch.selectedOptions[0].text;
    }
    if (selElem && selElem.selectedOptions[0]) {
      this.element = selElem.selectedOptions[0].text;
    }
    if (selConf && selConf.selectedOptions[0]) {
      this.conflict = selConf.selectedOptions[0].text;
    }
  }

  startQuest() {
    this.readForgeContext();
    this.currentStep = 1;
    this.selectedPath = null;
    this.selectedCrucible = null;

    if (this.container) {
      this.container.classList.remove('is-hidden');
      this.container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (this.questTitle) {
      this.questTitle.textContent = `The Trial of ${this.archetype}`;
    }

    this.renderStage1();
    audio.playTone(520, 'sine', 0.2);
  }

  updateProgress(step) {
    this.currentStep = step;
    [this.step1, this.step2, this.step3].forEach((el, idx) => {
      if (!el) return;
      el.classList.toggle('is-active', idx + 1 === step);
      el.classList.toggle('is-completed', idx + 1 < step);
    });
  }

  renderStage1() {
    this.updateProgress(1);
    if (!this.stageBody) return;

    this.stageBody.innerHTML = `
      <div class="vignette-stage-card">
        <div class="vignette-choice-tag">Stage 1: The Cosmic Threshold</div>
        <p class="vignette-narrative-text">
          You stand between the mortal world and the celestial canopy as <strong>${this.archetype}</strong>. 
          Wielding the primordial essence of <strong>${this.element}</strong>, you gaze upon the cosmic tear: <em>${this.conflict}</em>. 
          Ancient sentinels guard the dual gateways of destiny. Which path will you choose to cross the celestial threshold?
        </p>
        <div class="vignette-choices-grid">
          <button class="vignette-choice-btn" id="vchoice-path-a" type="button">
            <span class="vignette-choice-tag">Path A • Righteous Radiance</span>
            <span class="vignette-choice-title">Charge the Solar Gate</span>
            <span class="vignette-choice-sub">Directly confront the divine guardians using unfiltered elemental light.</span>
          </button>
          <button class="vignette-choice-btn" id="vchoice-path-b" type="button">
            <span class="vignette-choice-tag">Path B • Shadow Cunning</span>
            <span class="vignette-choice-title">Slip Through the Whispering Veil</span>
            <span class="vignette-choice-sub">Weave subtle illusions and outwit the sentinels unseen.</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('vchoice-path-a')?.addEventListener('click', () => {
      this.selectedPath = 'radiance';
      audio.playCorrect();
      this.renderStage2();
    });

    document.getElementById('vchoice-path-b')?.addEventListener('click', () => {
      this.selectedPath = 'cunning';
      audio.playCorrect();
      this.renderStage2();
    });
  }

  renderStage2() {
    this.updateProgress(2);
    if (!this.stageBody) return;

    const pathDesc = this.selectedPath === 'radiance'
      ? 'Having stormed past the guardians with a blaze of courage, you breach the Sanctum of Eternity.'
      : 'Having danced through the shadows with peerless wit, you arrive undetected at the Sanctum of Eternity.';

    this.stageBody.innerHTML = `
      <div class="vignette-stage-card">
        <div class="vignette-choice-tag">Stage 2: The Cosmic Crucible</div>
        <p class="vignette-narrative-text">
          ${pathDesc} Before you, the cosmic dilemma reaches its boiling point: <em>${this.conflict}</em>. 
          The fabric of reality begins to unravel into chaos. A momentous sacrifice or mastery is demanded. How do you resolve this cosmic crisis?
        </p>
        <div class="vignette-choices-grid">
          <button class="vignette-choice-btn" id="vcrucible-1" type="button">
            <span class="vignette-choice-tag">Trial I • Selfless Preservation</span>
            <span class="vignette-choice-title">Weave Your Spirit into the Cosmic Loom</span>
            <span class="vignette-choice-sub">Sacrifice personal power to mend the rift and shield all mortal souls.</span>
          </button>
          <button class="vignette-choice-btn" id="vcrucible-2" type="button">
            <span class="vignette-choice-tag">Trial II • Bold Liberation</span>
            <span class="vignette-choice-title">Shatter the Ancient Heavenly Mandate</span>
            <span class="vignette-choice-sub">Unleash the full fury of ${this.element} to birth a free, untamed world.</span>
          </button>
          <button class="vignette-choice-btn" id="vcrucible-3" type="button">
            <span class="vignette-choice-tag">Trial III • Transcendent Harmony</span>
            <span class="vignette-choice-title">Whisper the Ineffable Riddle of Equilibrium</span>
            <span class="vignette-choice-sub">Reconcile darkness and light into eternal philosophical balance.</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('vcrucible-1')?.addEventListener('click', () => {
      this.selectedCrucible = 'guardian';
      audio.playFanfare();
      this.renderStage3();
    });

    document.getElementById('vcrucible-2')?.addEventListener('click', () => {
      this.selectedCrucible = 'liberator';
      audio.playFanfare();
      this.renderStage3();
    });

    document.getElementById('vcrucible-3')?.addEventListener('click', () => {
      this.selectedCrucible = 'sage';
      audio.playFanfare();
      this.renderStage3();
    });
  }

  renderStage3() {
    this.updateProgress(3);
    if (!this.stageBody) return;

    let ending = {};
    if (this.selectedCrucible === 'guardian') {
      ending = {
        badgeIcon: '⭐',
        badgeName: 'Cosmic Weaver',
        title: 'The Apotheosis of the Eternal Guardian',
        lore: `Surrendering the ephemeral desire for glory, ${this.archetype} channeled the boundless power of ${this.element} to mend the cracked cosmic fabric. The crisis of ${this.conflict.toLowerCase()} was resolved forever. Ascending beyond mortal reach, your constellation now glitters in the midnight sky. Across seven civilizations, priestesses and bards chant hymns of your devotion, knowing that whenever winter chills the world, your living warmth cradles the stars.`
      };
    } else if (this.selectedCrucible === 'liberator') {
      ending = {
        badgeIcon: '🔥',
        badgeName: 'Solar Liberator',
        title: 'The Ascendant Rebel of the New Dawn',
        lore: `Refusing subservience to celestial thrones, ${this.archetype} shattered the stagnant boundaries of the universe with ${this.element}. By conquering ${this.conflict.toLowerCase()}, you freed mortal hearts from fear and ignorance. Though the old pantheon shook with fury, humanity awoke under a new sun ignited by your courage. You walk the earth as an undying folk legend, the fiery spark of freedom that will never be quenched.`
      };
    } else {
      ending = {
        badgeIcon: '🌙',
        badgeName: 'Void Harmonizer',
        title: 'The Enigmatic Sage of the Unseen Realms',
        lore: `Neither destroying nor yielding, ${this.archetype} uncovered the secret equilibrium concealed beneath ${this.conflict.toLowerCase()}. Using ${this.element} as a cosmic prism, you united the opposing forces of heaven and underworld into eternal harmony. You dwell now in the quiet spaces between heartbeats—a mythic oracle whose counsel is sought by gods and mortals alike across the rolling ages.`
      };
    }

    this.stageBody.innerHTML = `
      <div class="vignette-stage-card vignette-ending-card">
        <div class="vignette-badge-wrap">
          <span>${ending.badgeIcon}</span>
        </div>
        <div class="vignette-ending-badge-name">${ending.badgeName} • Destiny Achieved</div>
        <h4 class="vignette-ending-title">${ending.title}</h4>
        <p class="vignette-ending-lore">${ending.lore}</p>
        <div class="vignette-ending-actions">
          <button class="spark-btn-primary" id="btn-save-vignette-codex" type="button">
            <span>💾 Save Saga to My Codex</span>
          </button>
          <button class="spark-btn-secondary" id="btn-restart-vignette" type="button">
            <span>🔄 Forge Another Destiny</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-save-vignette-codex')?.addEventListener('click', () => {
      const entry = {
        id: Date.now(),
        title: `${ending.badgeIcon} ${ending.title}`,
        lore: ending.lore,
        prompt: `Write the epic ballad of ${this.archetype} who harnessed ${this.element} to conquer ${this.conflict.toLowerCase()} as the ${ending.badgeName}.`,
        badge: ending.badgeName,
        date: new Date().toLocaleDateString()
      };

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_SPARKS) || '[]');
        saved.unshift(entry);
        localStorage.setItem(STORAGE_KEYS.SAVED_SPARKS, JSON.stringify(saved));
        if (typeof renderSavedSparks === 'function') renderSavedSparks();
        const btnSave = document.getElementById('btn-save-vignette-codex');
        if (btnSave) {
          btnSave.innerHTML = '<span>✓ Saga Inscribed in Codex!</span>';
          btnSave.disabled = true;
        }
        audio.playMatchSuccess();
      } catch (e) {
        console.warn('Error saving saga:', e);
      }
    });

    document.getElementById('btn-restart-vignette')?.addEventListener('click', () => {
      this.startQuest();
    });
  }
}

// Instantiate Relic Museum and Mythic Quest Vignette
let relicMuseum = null;
let vignetteEngine = null;
document.addEventListener('DOMContentLoaded', () => {
  relicMuseum = new RelicMuseum();
  vignetteEngine = new MythicVignetteEngine();
});

// If DOM is already loaded, instantiate immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  if (!relicMuseum) relicMuseum = new RelicMuseum();
  if (!vignetteEngine) vignetteEngine = new MythicVignetteEngine();
}
