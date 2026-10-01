// All page content lives here so it can be swapped out later without touching components.

export type Badge = "explicit" | "appOnly" | "onlyOn";

export const nav = {
  discover: {
    blurb:
      "Original, exclusive, unparalleled variety. Jump right into a specific category or browse all of SiriusXM’s awesome content.",
    cta: { label: "Browse all content", href: "#" },
    categories: [
      { title: "Music", href: "#", images: ["ch-hits-1", "nav-hip-hop-nation", "ch-the-highway"] },
      { title: "Sports", href: "#", images: ["ch-nfl-radio", "ch-nba-radio", "ch-nhl-radio"] },
      { title: "Talk", href: "#", images: ["nav-howard-100", "nav-unwell", "nav-conan"] },
      { title: "News", href: "#", images: ["ch-fox-news", "ch-ms-now", "ch-cnn"] },
      { title: "Podcasts", href: "#", images: ["nav-call-her-daddy", "ch-smartless", "nav-rotten-mango"] },
    ],
    tile: { image: "nav-mlb", eyebrow: "CH 89", title: "MLB Network Radio", href: "#" },
  },
  subscriptions: {
    blurb:
      "From the ultimate music adventure to the complete SiriusXM experience—we’ve got a plan that’s right for you!",
    cta: { label: "Compare plans", href: "/choose-plan" },
    links: [
      { title: "Free trial", href: "/free-trial" },
      { title: "Inside the car", href: "/choose-plan" },
      {
        title: "On the SiriusXM app",
        href: "/choose-plan#streaming",
      },
      { title: "Returning listener offers", href: "/choose-plan" },
    ],
    promo: {
      title: "Immerse yourself in what you love",
      body: "Curated music channels, live sports, news across the spectrum, celebrity-hosted talk, comedy, and more. The entertainment you choose, wherever you want to listen.",
      cta: {
        label: "Build your plan",
        href: "/choose-plan",
      },
    },
  },
  channelGuide: { label: "Channel Guide", href: "#" },
  support: {
    heading: { label: "Help Center", href: "/help" },
    links: [
      { label: "Transfer my subscription", href: "#" },
      { label: "Request radio signal", href: "#" },
      { label: "Do Not Call Policy", href: "#" },
      { label: "Manage or cancel my subscription", href: "#" },
      { label: "Add new vehicle", href: "#" },
    ],
  },
  startListening: { label: "Start Listening", href: "#" },
  search: {
    suggestions: ["Jeff Lewis", "MLB", "Yacht Rock", "Spa", "Lineup Changes", "My Account", "Blog", "New, hot, and trending!"],
    quickLinks: [
      { title: "Music", icon: "music", href: "#" },
      { title: "Sports", icon: "sports", href: "#" },
      { title: "Talk", icon: "talk", href: "#" },
      { title: "News", icon: "news", href: "#" },
      { title: "Podcasts", icon: "podcast", href: "#" },
      { title: "Help Center", icon: "help", href: "/help" },
      { title: "Add New Vehicle", icon: "car", href: "#" },
      { title: "Sweepstakes", icon: "sweeps", href: "#" },
    ],
  },
};

export const offerCtas = {
  primary: { label: "$1 for 3 months", href: "/choose-plan" },
  secondary: { label: "Choose your plan", href: "/choose-plan" },
};

export const hero = {
  title: "Music, sports, news, talk, and podcasts",
  subtitle:
    "The best in audio entertainment wherever you choose to listen—in your car, on your phone, at home on your TV, speakers, and other smart devices",
  background: "/images/hero-demi-bg.webp",
  mobileImage: "/images/hero-demi-mobile.webp",
  imageAlt: "Demi Lovato",
  credit: "Demi Lovato visits SiriusXM",
};

export const campaign = {
  title: "Jeff Lewis Live",
  body: "We’re Jeffmaxxing five days a week—with more Jeff than you can handle. Catch two hours of LOLs, WTFs and OMGs as Jeff Lewis takes on everything from fatherhood and relationships to celebrity interviews and more. Don’t miss the highly acclaimed and completely uncensored Jeff Lewis Live on Radio Andy, exclusively on SiriusXM.",
  image: "/images/jeff-lewis.webp",
  imageAlt: "Jeff Lewis",
  background: "#444c46",
  primary: { label: "Listen now", href: "#" },
  secondary: { label: "Explore Jeff merch", href: "#" },
};

export const variety = {
  title: "The widest variety anywhere",
  subtitle:
    "Original and exclusive channels and shows. Candid conversations. Round-the-clock comedy. Play-by-play for pro and college sports.",
  categories: [
    {
      title: "Curated music channels",
      body: "By genre, decade, artist, and mood. Playlists created by experts and DJs, so you can lean back and listen.",
      href: "#",
      round: true,
      images: [
        { src: "host-ll-cool-j", bg: "#969387", alt: "LL Cool J" },
        { src: "host-steve-aoki", bg: "#a2bfe7", alt: "Steve Aoki" },
        { src: "host-kelly-clarkson", bg: "#79aa88", alt: "Kelly Clarkson" },
      ],
    },
    {
      title: "Live games & sports talk",
      body: "NFL, MLB®, NBA, NHL®, NCAA®, NASCAR®, and PGA TOUR. Predictions, analysis, and fantasy sports.",
      href: "#",
      round: false,
      images: [
        { src: "ch-nfl-radio", alt: "SiriusXM NFL Radio" },
        { src: "ch-nba-radio", alt: "SiriusXM NBA Radio" },
        { src: "ch-nhl-radio", alt: "NHL Network Radio" },
      ],
    },
    {
      title: "News & politics",
      body: "World, national, and regional sources you trust. Business coverage. Issues from every point of view.",
      href: "#",
      round: false,
      images: [
        { src: "ch-fox-news", alt: "FOX News Channel" },
        { src: "ch-ms-now", alt: "MS NOW" },
        { src: "ch-cnn", alt: "CNN" },
      ],
    },
    {
      title: "Talk shows & podcasts",
      body: "Celeb hosts, A-list guests, and LOL comics. Everything from lifestyles and fashion to faith and health.",
      href: "#",
      round: true,
      images: [
        { src: "host-kevin-hart", bg: "#8b79aa", alt: "Kevin Hart" },
        { src: "host-randi-zuckerberg", bg: "#a1847a", alt: "Randi Zuckerberg" },
        { src: "host-andy-cohen", bg: "#8998b4", alt: "Andy Cohen" },
      ],
    },
  ],
  cta: { label: "Discover more", href: "#" },
};

export const videos = {
  title: "Tap into exclusive interviews and performances",
  subtitle: "Click play to listen now.",
  items: [
    {
      title: "Laufey",
      youtubeId: "KLW11pDV63Y",
      image: "/videos/laufey.jpg",
      description: (
        <>
          Tune in to Laufey&apos;s performance of <i>Lover Girl</i> on SiriusXM Hits 1 (CH 2).
        </>
      ),
    },
    {
      title: "Jill Scott",
      youtubeId: "N_1h1rIBBZI",
      image: "/videos/jill-scott.jpg",
      description: <>Jill Scott discusses the many interpretations of the album cover art with &apos;To Whom This May Concern.&apos;</>,
    },
    {
      title: "Florence + The Machine",
      youtubeId: "mzREKWfRseU",
      image: "/videos/florence.jpg",
      description: (
        <>
          Listen to <i>Sympathy Magic</i> performed live in-studio on The Spectrum (CH 28).
        </>
      ),
    },
    {
      title: "Bruce Springsteen & Jeremy Allen White",
      youtubeId: "PFez2XZag1U",
      image: "/videos/springsteen.jpg",
      description: (
        <>
          Hear them discuss filming <i>Springsteen: Deliver Me from Nowhere</i> on E Street Radio (CH 20).
        </>
      ),
    },
    {
      title: "Royel Otis",
      youtubeId: "JGUVB19e13s",
      image: "/videos/royel-otis.jpg",
      description: (
        <>
          Watch the Australian indie pop duo perform The Cranberrie’s <i>Linger</i> live at SiriusXM.
        </>
      ),
    },
  ],
};

export const stars = {
  title: "Get closer to the stars",
  subtitle: "Hear what’s hot, new, and trending straight from the artists, hosts, and influencers you love to follow.",
  items: [
    {
      channel: "CH 3",
      name: "Alex Cooper",
      body: "A unique music experience curated by the popular Call Her Daddy host and founder of Unwell",
      image: "star-alex-cooper",
      bg: "#c4a186",
      href: "#",
    },
    {
      channel: "CH 19",
      name: "Bob Marley",
      body: "All of his music in one place, including rare gems and his family’s recordings",
      image: "star-bob-marley",
      bg: "#91a990",
      href: "#",
    },
    {
      channel: "CH 82",
      name: "Christopher 'Mad Dog' Russo",
      body: "Hear feisty takes from one of sports talk radio’s biggest personalities.",
      image: "star-chris-russo",
      bg: "#a59fa8",
      href: "#",
    },
    {
      channel: "CH 60",
      name: "Carrie Underwood",
      body: "Carrie shares the stories behind her record-breaking career and catalog",
      image: "star-carrie-underwood",
      bg: "#dba7ab",
      href: "#",
    },
    {
      channel: "CH 102",
      name: "Tinx",
      body: "Wit, candor, and advice from social media phenom and host of “It’s Me, Tinx Live”",
      image: "star-tinx",
      bg: "#97c3cd",
      href: "#",
    },
  ],
};

export type Channel = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  href: string;
  badges?: Badge[];
};

export const channelList = {
  title: "Immerse yourself in whatever moves you",
  subtitle:
    "Artist inspired and curated channels, things that make you laugh, lively sports talk with league insiders, an ever-growing lineup of popular and original podcasts, advice on anything life may throw your way",
  cta: { label: "View full channel guide", href: "#" },
  items: [
    {
      eyebrow: "PODCAST",
      title: "Busted Open",
      body: "Join Dave LaGreca and his rotating co-host chair that features two WWE Hall of Famers in Bully Ray and Mark Henry, Nic Nemeth, AEW superstar Thunder Rosa, and ECW legend Tommy Dreamer for the best pro wrestling talk on radio. From the WWE to AEW to the independent scene and beyond, Busted Open covers pro-wrestling like no one else in the world!",
      image: "ch-busted-open",
      href: "#",
    },
    { eyebrow: "CH 8", title: "80s on 8", body: "Pop hits from the MTV era", image: "ch-80s-on-8", href: "#" },
    { eyebrow: "CH 149", title: "Caliente", body: "Tropical Latin hits", image: "ch-caliente", href: "#" },
    {
      eyebrow: "CH 75",
      title: "B.B. King's Bluesville",
      body: "Blues, past & present",
      image: "ch-bb-kings-bluesville",
      href: "#",
    },
    {
      eyebrow: "CH 140",
      title: "Radio Classics",
      body: "Classic radio dramas & comedy",
      image: "ch-radio-classics",
      href: "#",
    },
    { eyebrow: "CH 119", title: "Doctor Radio", body: "Real doctors, real people", image: "ch-doctor-radio", href: "#" },
    { eyebrow: "CH 133", title: "Disney Hits", body: "Wonderful world of Disney hits", image: "ch-disney-hits", href: "#" },
    { eyebrow: "CH 56", title: "The Highway", body: "Next generation country music", image: "ch-the-highway", href: "#" },
    {
      eyebrow: "CH 105",
      title: "Netflix Is A Joke Radio",
      body: "Stand-up comedy",
      image: "ch-netflix-is-a-joke",
      href: "#",
      badges: ["explicit"],
    },
    {
      eyebrow: "CH 460",
      title: "The Billy Graham Channel",
      body: "Messages from Billy Graham",
      image: "ch-billy-graham",
      href: "#",
    },
    {
      eyebrow: "CH 87",
      title: "Fantasy Sports Radio",
      body: "Fantasy sports talk",
      image: "ch-fantasy-sports",
      href: "#",
    },
    {
      eyebrow: "PODCAST",
      title: "The Three Questions with Andy Richter",
      body: "Host Andy Richter asks the same three questions to each guest: Where do you come from? Where are you going? What have you learned? These three simple questions, when answered honestly and thoughtfully, are enough to provide a pretty complete picture of who a person is. The answers are what Andy always wants to know about people. This will not be a one-sided process, as Andy won’t shy away from getting personal himself.",
      image: "ch-three-questions",
      href: "#",
    },
    {
      eyebrow: "CH 74",
      title: "Smokey's Soul Town",
      body: "Classic R&B hosted by Smokey!",
      image: "ch-smokeys-soul-town",
      href: "#",
    },
    {
      eyebrow: "CH 84",
      title: "College Sports Radio",
      body: "College Sports Talk/PXP",
      image: "ch-college-sports",
      href: "#",
    },
    {
      eyebrow: "PODCAST",
      title: "SmartLess Radio",
      body: "SmartLess 24/7",
      image: "ch-smartless",
      href: "#",
      badges: ["explicit", "appOnly"],
    },
    { eyebrow: "CH 142", title: "Road Dog Trucking", body: "Trucking talk", image: "ch-road-dog", href: "#" },
    { eyebrow: "CH 163", title: "Korea Today", body: "Korean music & news", image: "ch-korea-today", href: "#" },
    {
      eyebrow: "CH 132",
      title: "Business Radio",
      body: "Your business, money and life",
      image: "ch-business-radio",
      href: "#",
    },
    {
      eyebrow: "CH 102",
      title: "Sebastian Maniscalco’s Comedy Radio",
      body: "Stand-up and more",
      image: "ch-sebastian-comedy",
      href: "#",
      badges: ["onlyOn", "explicit"],
    },
    {
      eyebrow: "",
      title: "A State of Armin",
      body: "Trance & progressive hits",
      image: "ch-state-of-armin",
      href: "#",
      badges: ["appOnly"],
    },
    {
      eyebrow: "CH 137",
      title: "Faction Talk",
      body: "Unfiltered talk",
      image: "ch-faction-talk",
      href: "#",
      badges: ["explicit"],
    },
    { eyebrow: "CH 69", title: "On Broadway", body: "Show tunes", image: "ch-on-broadway", href: "#" },
    { eyebrow: "CH 2", title: "SiriusXM Hits 1", body: "Pop hits, now to next", image: "ch-hits-1", href: "#" },
    {
      eyebrow: "CH 45",
      title: "Shade 45",
      body: "Eminem's channel",
      image: "ch-shade-45",
      href: "#",
      badges: ["explicit"],
    },
  ] as Channel[],
};

export const trending = {
  title: "New, hot, and trending!",
  cta: { label: "Explore what's new", href: "#" },
  featured: {
    title: "More sports than ever!",
    body: "Stay connected to the hometown sports radio you love—in your car and on the SiriusXM app. We’ve added 24 new sports channels featuring local teams and voices from top sports markets coast to coast.",
    image: "new-local-sports",
    alt: "local sports talk channels",
    href: "#",
  },
  cards: [
    {
      title: "The Billy Joel Channel",
      image: "new-billy-joel",
      alt: "The Billy Joel Channel",
      href: "#",
      body: (
        <>
          <i>Now until October 1st</i>
          <br />
          Music from Billy Joel&apos;s career plus stories behind the songs and Billy&apos;s memories, anecdotes, and celebrating the 50
          <sup>th</sup> anniversary of his classic album, <i>Turnstiles</i>.
          <br />
          <b>(CH 93)</b>
        </>
      ),
    },
    {
      title: "It's all good in the neighborhood here on SiriusXM",
      image: "new-howard",
      alt: "The King has returned and has new neighbors",
      href: "#",
      body: (
        <>
          Your favorite hosts are now closer together. Check out our updated 100-104 channel lineup featuring Howard Stern, Andy Cohen,
          Sebastian Maniscalco, Kevin Hart, and Conan O&apos;Brien.
        </>
      ),
    },
    {
      title: "EARTH WIND & FIRE Radio",
      image: "new-ewf",
      alt: "Earth Wind and Fire Radio on SiriusXM",
      href: null,
      body: (
        <>
          <i>Now until September 30th</i>
          <br />
          R&amp;B royalty EARTH WIND &amp; FIRE take over SiriusXM, discussing their lengandary career and the songs we&apos;ve known and
          loved for decades....and of course, it launches in SEPTEMBER!
        </>
      ),
    },
  ],
};

export const devices = {
  title: "Take your favorite sounds wherever you go",
  subtitle: "With SiriusXM, you get to choose the ways you want to listen.",
  items: [
    {
      title: "On the go",
      body: "Stream on your phone and mobile devices with the SiriusXM app",
      icons: [{ src: "laptop-phone", alt: "laptop" }],
    },
    {
      title: "At home",
      body: "Play SiriusXM with your smart TV, speakers and displays, and more",
      icons: [
        { src: "apple-tv", alt: "Apple TV Icon" },
        { src: "amazon-alexa", alt: "Amazon Alexa Icon" },
      ],
    },
    {
      title: "On your car radio",
      body: "Tune in to the channels you love on the road coast to coast",
      icons: [
        { src: "in-the-car", alt: "car radio" },
        { src: "satellite", alt: "Satellite" },
        { src: "car-phone", alt: "Car Phone" },
      ],
    },
  ],
  href: "#",
  cta: { label: "Learn More", href: "#" },
};

export const promo = {
  title: "We’ve got plans for every kind of listener",
  subtitle: "Exclusive channels, sports play-by-play, A-list hosts. The variety you want, where you choose to listen.",
};

export const footer = {
  columns: [
    {
      heading: "GET SIRIUSXM",
      links: [
        ["In-car and App Plans", "/choose-plan"],
        ["Try SiriusXM for Free", "/free-trial"],
        ["Military Discount", "/offers/military"],
        ["Student Plan", "/offers/student"],
        ["Shop Radios", "#"],
        ["Infotainment", "#"],
        ["Marine", "#"],
        ["Aviation", "#"],
        ["Fleets", "#"],
        ["SiriusXM for Business", "#"],
      ],
    },
    {
      heading: "ACCOUNT MANAGEMENT",
      links: [
        ["Sign In", "#"],
        ["Create Account", "#"],
        ["Make a Payment", "#"],
        ["Transfer Subscription", "#"],
        ["Request Radio Signal", "#"],
        ["Add New Vehicle", "#"],
      ],
    },
    {
      heading: "SIRIUSXM CORPORATE",
      links: [
        ["About SiriusXM", "#"],
        ["Investor Relations", "#"],
        ["Newsroom", "#"],
        ["Become an Affiliate", "#"],
        ["Advertise with Us", "#"],
        ["Careers", "#"],
      ],
    },
    {
      heading: "MORE",
      links: [
        ["Blog", "#"],
        ["Ways to Listen", "#"],
        ["Merch Store", "#"],
        ["SiriusXM Gift Cards", "#"],
        ["Canada", "#"],
      ],
    },
    {
      heading: "CUSTOMER SUPPORT",
      links: [
        ["Contact Us", "/contactus"],
        ["Frequently Asked Questions", "/help"],
        ["Help Center", "/help"],
      ],
    },
  ],
  appStore: "#",
  googlePlay: "#",
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    x: "#",
    youtube: "#",
  },
  legal: [
    ["Website Terms", "#"],
    ["Customer Agreement", "#"],
    ["Privacy Policy", "#"],
    ["Your Ad Choices", "#"],
    ["Do Not Call Policy", "#"],
    ["Your Privacy Choices", "#"],
    ["FCC Public File", "#"],
    ["FCC Info", "#"],
    ["Manage Cookies", "#"],
  ],
  copyright: "©2026 Sirius XM Radio LLC",
};
