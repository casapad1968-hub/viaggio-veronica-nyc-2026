// Itinerario New York — Veronica, Erry, Teo & Asia
// 6-14 Agosto 2026

const itineraryData = {
  tripName: "New York 2026",
  travelers: ["Veronica", "Erry", "Teo", "Asia"],
  startDate: "2026-08-06T14:30:00-04:00",
  endDate: "2026-08-14T19:00:00-04:00",
  timezone: "America/New_York",
  phases: [
    {
      id: "nyc",
      name: "New York City",
      emoji: "🗽",
      color: "#00529B",
      days: [0,1,2,3,4,5,6,7]
    }
  ],
  days: [
    {
      day: 1,
      date: "6 Agosto 2026",
      title: "Arrivo a New York!",
      emoji: "✈️",
      phase: "nyc",
      bgColor: "#00529B",
      highlights: {
        colazione: "In volo",
        pranzo: "In volo",
        cena: "🇺🇸 Prima cena americana!",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "14:30",
          title: "✈️ Atterraggio al JFK",
          description: "Arrivo al John F. Kennedy International Airport. Recupero bagagli e passaggio attraverso l'immigrazione (portate passaporti e stampa ESTA pronti!).",
          link: "https://www.jfkairport.com/"
        },
        {
          time: "15:30",
          title: "🚕 Transfer in hotel",
          description: "Taxi/Uber per Manhattan (circa 45-60 min, $60-80 flat rate). Oppure AirTrain JFK + Subway (più economico, ~$11 a persona).",
          link: "https://www.jfkairport.com/to-from/ground-transportation"
        },
        {
          time: "17:00",
          title: "🏨 Check-in hotel",
          description: "Sistemazione in hotel. Zona consigliata: Midtown Manhattan (Times Square, Herald Square) per essere centrali.",
          link: null
        },
        {
          time: "18:30",
          title: "🌆 Prima passeggiata a Times Square",
          description: "Ammirare le luci di Times Square al tramonto. Un'esperienza che toglie il fiato la prima volta! Foto di rito con i cartelloni pubblicitari.",
          link: "https://www.timessquarenyc.org/"
        },
        {
          time: "20:00",
          title: "🍕 Cena di benvenuto",
          description: "Prima cena newyorkese! Pizza al taglio da Joe's Pizza o Junior's Cheesecake. Un classico per iniziare alla grande.",
          link: "https://www.joespizzanyc.com/"
        }
      ]
    },
    {
      day: 2,
      date: "7 Agosto 2026",
      title: "Statua della Libertà & Wall Street",
      emoji: "🗽",
      phase: "nyc",
      bgColor: "#E63946",
      highlights: {
        colazione: "Bagel & cream cheese",
        pranzo: "Food truck a Battery Park",
        cena: "Italian food in Little Italy",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "08:00",
          title: "🥯 Colazione: Bagel newyorkese",
          description: "Colazione con bagel al sesamo, cream cheese e salmone affumicato. Da Ess-a-Bagel o Russ & Daughters.",
          link: "https://www.ess-a-bagel.com/"
        },
        {
          time: "09:00",
          title: "🗽 Statua della Libertà & Ellis Island",
          description: "Partenza da Battery Park con il traghetto Statue Cruises. Visita alla Statua della Libertà (salita al piedistallo consigliata) e al museo dell'immigrazione di Ellis Island. Prenotate i biglietti online in anticipo!",
          link: "https://www.statuecruises.com/"
        },
        {
          time: "13:00",
          title: "🥪 Pranzo a Battery Park",
          description: "Pranzo veloce ai food truck di Battery Park o al vicino South Street Seaport.",
          link: null
        },
        {
          time: "14:30",
          title: "🐂 Wall Street & Financial District",
          description: "Passeggiata a Wall Street, foto con il Charging Bull (il toro di Wall Street), visita alla Federal Hall e alla Trinity Church.",
          link: "https://www.wallstreetnyc.com/"
        },
        {
          time: "16:00",
          title: "🌆 One World Observatory",
          description: "Salita al One World Trade Center (Freedom Tower). Vista mozzafiato a 360° da 386 metri d'altezza. Il punto più alto dell'emisfero occidentale!",
          link: "https://www.oneworldobservatory.com/"
        },
        {
          time: "18:00",
          title: "🕯️ 9/11 Memorial & Museum",
          description: "Visita al memoriale delle Torri Gemelle. Le due piscine riflettenti sono molto emozionanti. Il museo è profondo e toccante (consigliato per adulti e ragazzi).",
          link: "https://www.911memorial.org/"
        },
        {
          time: "20:00",
          title: "🍝 Cena a Little Italy",
          description: "Cena italiana a Little Italy o Chinatown. Da Lombardi's (la prima pizzeria d'America!) o da Rubirosa.",
          link: "https://www.lombardispizza.com/"
        }
      ]
    },
    {
      day: 3,
      date: "8 Agosto 2026",
      title: "Central Park & Museum Mile",
      emoji: "🌳",
      phase: "nyc",
      bgColor: "#2D8A4E",
      highlights: {
        colazione: "Pancakes americani",
        pranzo: "Picnic a Central Park",
        cena: "Shake Shack",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "08:30",
          title: "🥞 Colazione: Pancakes!",
          description: "Colazione americana con pancakes, sciroppo d'acero e bacon. Da Sarabeth's o Clinton St. Baking Company.",
          link: "https://www.sarabeths.com/"
        },
        {
          time: "10:00",
          title: "🌳 Central Park — Parte 1",
          description: "Passeggiata a Central Park: Bethesda Terrace, Bow Bridge, il laghetto delle barche a vela, Strawberry Fields (memoriale John Lennon).",
          link: "https://www.centralparknyc.org/"
        },
        {
          time: "12:00",
          title: "🦕 American Museum of Natural History",
          description: "Uno dei musei più belli del mondo! Scheletri di dinosauri, planetario Hayden, sale degli animali. Imperdibile per ragazzi e adulti.",
          link: "https://www.amnh.org/"
        },
        {
          time: "14:00",
          title: "🧺 Picnic a Central Park",
          description: "Pranzo al sacco a Central Park. Prendete panini e snack da un deli nelle vicinanze e godetevi l'ombra degli alberi.",
          link: null
        },
        {
          time: "15:30",
          title: "🎨 The Metropolitan Museum of Art (The Met)",
          description: "Il più grande museo d'arte degli Stati Uniti. Anche solo un'ora per vedere i capolavori: Van Gogh, Monet, l'arte egizia, il tempio di Dendur.",
          link: "https://www.metmuseum.org/"
        },
        {
          time: "18:00",
          title: "🛶 Giro in barca a Central Park",
          description: "Noleggio di una barca a remi al Loeb Boathouse. Un'esperienza romantica e divertente per tutta la famiglia.",
          link: "https://www.thecentralparkboathouse.com/"
        },
        {
          time: "20:00",
          title: "🍔 Cena: Shake Shack",
          description: "Hamburger, milkshake e patatine da Shake Shack al Madison Square Park. Un'istituzione newyorkese!",
          link: "https://www.shakeshack.com/"
        }
      ]
    },
    {
      day: 4,
      date: "9 Agosto 2026",
      title: "Empire State & Midtown",
      emoji: "🏢",
      phase: "nyc",
      bgColor: "#1C1C1C",
      highlights: {
        colazione: "Caffè & pasticcini",
        pranzo: "Katz's Delicatessen",
        cena: "Korean BBQ",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "09:00",
          title: "🏢 Empire State Building",
          description: "Salita all'86° piano (Main Deck) per viste spettacolari. Prenotate online per saltare la fila. Arrivate presto per evitare la folla!",
          link: "https://www.esbnyc.com/"
        },
        {
          time: "11:00",
          title: "📚 New York Public Library",
          description: "Visita alla splendida biblioteca pubblica di New York (quella con i leoni di pietra all'ingresso). Gli interni sono magnifici.",
          link: "https://www.nypl.org/"
        },
        {
          time: "12:00",
          title: "⛪ St. Patrick's Cathedral",
          description: "La cattedrale neogotica sulla Fifth Avenue. Un'oasi di pace in mezzo al caos di Midtown.",
          link: "https://www.saintpatrickscathedral.org/"
        },
        {
          time: "13:00",
          title: "🥪 Pranzo da Katz's Delicatessen",
          description: "Il famosissimo deli ebraico di New York. Pastrami sandwich leggendario! (Quello di Harry ti amo in Harry ti presento Sally).",
          link: "https://katzsdelicatessen.com/"
        },
        {
          time: "15:00",
          title: "🛍️ Fifth Avenue Shopping",
          description: "Passeggiata sulla Fifth Avenue: Rockefeller Center, Tiffany & Co., FAO Schwarz (il negozio di giocattoli più famoso).",
          link: "https://www.rockefellercenter.com/"
        },
        {
          time: "17:00",
          title: "🌇 Top of the Rock",
          description: "Salita al Rockefeller Center per il tramonto. La vista include l'Empire State Building nella cornice — la foto perfetta!",
          link: "https://www.rockefellercenter.com/top-of-the-rock/"
        },
        {
          time: "20:00",
          title: "🥩 Cena: Korean BBQ a K-Town",
          description: "Cena coreana a Koreatown (32nd Street). Grigliate al tavolo, banchan (contorni) infiniti. Divertente e delizioso!",
          link: null
        }
      ]
    },
    {
      day: 5,
      date: "10 Agosto 2026",
      title: "Brooklyn & Ponte",
      emoji: "🌉",
      phase: "nyc",
      bgColor: "#8B4513",
      highlights: {
        colazione: "Brunch a Brooklyn",
        pranzo: "Smorgasburg",
        cena: "Pizza a Brooklyn",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "09:00",
          title: "🌉 Brooklyn Bridge",
          description: "Passeggiata a piedi sul Brooklyn Bridge (circa 30 min). Viste spettacolari di Manhattan e della Statua della Libertà. Foto imperdibili!",
          link: "https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml"
        },
        {
          time: "10:00",
          title: "🥞 Brunch a Brooklyn Heights",
          description: "Colazione/brunch a Brooklyn Heights. Zona residenziale con case storiche e viste mozzafiato su Manhattan.",
          link: null
        },
        {
          time: "11:30",
          title: "🎡 Brooklyn Bridge Park",
          description: "Parco sul lungofiume con viste incredibili. Giochi per bambini, campi da basket, e il famoso Jane's Carousel.",
          link: "https://www.brooklynbridgepark.org/"
        },
        {
          time: "13:00",
          title: "🍴 Smorgasburg — Mercato di street food",
          description: "Il più grande mercato di street food all'aperto d'America (solo weekend!). Centinaia di stand con cibo da tutto il mondo.",
          link: "https://www.smorgasburg.com/"
        },
        {
          time: "15:00",
          title: "🎨 Street Art a Williamsburg",
          description: "Passeggiata a Williamsburg: street art, negozi vintage, caffè hipster. Zona giovane e creativa.",
          link: null
        },
        {
          time: "17:00",
          title: "🏙️ DUMBO photo stop",
          description: "A DUMBO (Down Under the Manhattan Bridge Overpass), la famosa foto con Washington Street che incornicia il Manhattan Bridge.",
          link: null
        },
        {
          time: "19:00",
          title: "🍕 Cena: Grimaldi's Pizza",
          description: "Pizza napoletana al carbone da Grimaldi's sotto il ponte di Brooklyn. Una delle migliori pizze di New York!",
          link: "https://www.grimaldis-pizza.com/"
        }
      ]
    },
    {
      day: 6,
      date: "11 Agosto 2026",
      title: "Musei & High Line",
      emoji: "🎨",
      phase: "nyc",
      bgColor: "#9B59B6",
      highlights: {
        colazione: "Caffè & muffin",
        pranzo: "Chelsea Market",
        cena: "Dinner a Hell's Kitchen",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "09:30",
          title: "🌿 The High Line",
          description: "Passeggiata sulla High Line, il parco sopraelevato costruito su una vecchia ferrovia. Un percorso unico tra giardini, arte e viste sulla città.",
          link: "https://www.thehighline.org/"
        },
        {
          time: "11:00",
          title: "🛒 Chelsea Market",
          description: "Mercato coperto con decine di stand gastronomici. Perfetto per uno spuntino o per comprare souvenir gastronomici.",
          link: "https://www.chelseamarket.com/"
        },
        {
          time: "12:30",
          title: "🎨 The Museum of Modern Art (MoMA)",
          description: "Capolavori dell'arte moderna: Van Gogh (Notte Stellata), Warhol, Picasso, Dalì, Pollock. Uno dei musei più importanti del mondo.",
          link: "https://www.moma.org/"
        },
        {
          time: "15:00",
          title: "🛍️ SoHo & Greenwich Village",
          description: "Passeggiata a SoHo: negozi, gallerie d'arte, strade acciottolate. Poi Greenwich Village: Washington Square Park, l'arco, gli artisti di strada.",
          link: null
        },
        {
          time: "17:00",
          title: "🎭 Broadway — Spettacolo serale",
          description: "Serata a Broadway! Scegliete uno spettacolo adatto alla famiglia: The Lion King, Aladdin, Wicked, o Harry Potter and the Cursed Child. Prenotate i biglietti su TodayTix o TKTS.",
          link: "https://www.tdf.org/nyc-tkts/"
        },
        {
          time: "22:00",
          title: "🌃 Passeggiata notturna a Times Square",
          description: "Times Square di notte è tutta un'altra storia. Le luci sono ancora più brillanti, l'energia è palpabile.",
          link: null
        }
      ]
    },
    {
      day: 7,
      date: "12 Agosto 2026",
      title: "Giornata Libera & Shopping",
      emoji: "🛍️",
      phase: "nyc",
      bgColor: "#E67E22",
      highlights: {
        colazione: "Libera scelta",
        pranzo: "Libera scelta",
        cena: "Libera scelta",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "Mattina",
          title: "🛍️ Shopping a Macy's & Herald Square",
          description: "Macy's a Herald Square è il negozio più grande del mondo (11 piani!). Ottimo per shopping di abbigliamento, cosmetici e souvenir.",
          link: "https://www.macys.com/"
        },
        {
          time: "Pranzo",
          title: "🍽️ Pranzo libero",
          description: "Scegliete voi dove mangiare! New York ha infinite opzioni. Consiglio: provate qualcosa che non avete ancora assaggiato.",
          link: null
        },
        {
          time: "Pomeriggio",
          title: "🎯 Attività a scelta",
          description: "Giornata libera per tornare nei posti preferiti o scoprirne di nuovi. Opzioni: Staten Island Ferry (gratis!), Roosevelt Island Tramway, Coney Island, o un museo che avete saltato.",
          link: null
        },
        {
          time: "Tramonto",
          title: "🌇 Tramonto da un rooftop",
          description: "Aperitivo con vista da un rooftop bar. Consigliato: The Press Lounge, 230 Fifth Rooftop, o il rooftop del Metropolitan Museum.",
          link: null
        },
        {
          time: "Sera",
          title: "🍽️ Cena libera",
          description: "Ultima cena a scelta. Ripetete il vostro ristorante preferito o provate qualcosa di nuovo!",
          link: null
        }
      ]
    },
    {
      day: 8,
      date: "13 Agosto 2026",
      title: "Ultimo giorno pieno",
      emoji: "⭐",
      phase: "nyc",
      bgColor: "#00529B",
      highlights: {
        colazione: "Colazione in hotel/deli",
        pranzo: "Ultimo pranzo NYC",
        cena: "Cena d'addio",
        pernottamento: "Hotel a Manhattan"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "09:00",
          title: "🚢 Staten Island Ferry",
          description: "Traghetto gratuito per Staten Island. 25 minuti di traversata con vista spettacolare della Statua della Libertà e dello skyline. Andata e ritorno senza scendere!",
          link: "https://www.siferry.com/"
        },
        {
          time: "11:00",
          title: "🎮 Nintendo NY & Rockefeller",
          description: "Visita al Nintendo Store (Rockefeller Center) — paradiso per i ragazzi! Poi ultimo giro al Rockefeller Center.",
          link: "https://www.nintendo.com/store/"
        },
        {
          time: "13:00",
          title: "🥪 Ultimo pranzo: Deli sandwich",
          description: "Un ultimo pastrami sandwich o un lobster roll per salutare New York come si deve.",
          link: null
        },
        {
          time: "15:00",
          title: "🎁 Souvenir & ultimi acquisti",
          description: "Ultimo giro per souvenir: magliette I ❤️ NY, statuette della Libertà, mug, dolci tipici.",
          link: null
        },
        {
          time: "18:00",
          title: "🌆 Ultimo tramonto a Manhattan",
          description: "Godetevi l'ultimo tramonto newyorkese. Consiglio: dal ponte di Brooklyn o da un rooftop.",
          link: null
        },
        {
          time: "20:00",
          title: "🍝 Cena d'addio",
          description: "Cena speciale per l'ultima sera. Scegliete il ristorante che più vi è piaciuto o provate un'esperienza nuova. Carmine's (cucina italiana in porzioni giganti) è perfetto per famiglie!",
          link: "https://www.carminesnyc.com/"
        }
      ]
    },
    {
      day: 9,
      date: "14 Agosto 2026",
      title: "Partenza ✈️",
      emoji: "✈️",
      phase: "nyc",
      bgColor: "#1C1C1C",
      highlights: {
        colazione: "Colazione in hotel",
        pranzo: "In aeroporto",
        cena: "In volo",
        pernottamento: "—"
      },
      timezone: "America/New_York",
      activities: [
        {
          time: "Mattina",
          title: "🧳 Check-out & preparativi",
          description: "Ultima colazione a New York, check-out dall'hotel e preparazione bagagli.",
          link: null
        },
        {
          time: "15:00",
          title: "🚕 Transfer per JFK",
          description: "Partenza per l'aeroporto JFK. Meglio partire con 3-4 ore di anticipo per sicurezza (traffico imprevedibile!).",
          link: null
        },
        {
          time: "19:00",
          title: "✈️ Decollo da JFK",
          description: "Volo JFK → Milano Malpensa. Fine dell'avventura newyorkese! 🗽",
          link: null
        }
      ]
    }
  ]
};
