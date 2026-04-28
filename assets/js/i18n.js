/**
 * Studio Well — i18n Toggle (PL / EN)
 * Default language: Polish (pl)
 * Usage: add data-i18n="key" to any element
 *        add data-i18n-ph="key" to input placeholders
 */

(function () {
  'use strict';

  /* ── Translations ────────────────────────────────────────── */
  var T = {
    pl: {
      /* Navigation */
      'nav.about':        'O nas',
      'nav.wellhair':     'Well Hair',
      'nav.wellhead':     'Well Head',
      'nav.team':         'Specjaliści',
      'nav.subscription': 'Subskrypcja',
      'nav.training':     'Szkolenia',
      'nav.headspa':      'Head SPA',
      'nav.book':         'Zarezerwuj',
      'nav.locate':       'Locate a Salon',
      'nav.contact':      'Kontakt',
      'nav.follow':       'Obserwuj',

      /* Hero slide 2 */
      'hero2.l1':   'Tutaj zaczyna się',
      'hero2.l2':   'Twoja przygoda z pięknem',
      'hero2.f1':   'Nagradzany salon fryzjerski',
      'hero2.f2':   'Head Spa',
      'hero2.f3':   'Szkolenia',
      'hero2.btn':  'Zarezerwuj',

      /* About section (homepage) */
      'home.about.sub':   'REWOLUCJA W ŚWIECIE FRYZJERSTWA',
      'home.about.title': 'We care about your wellbeing',
      'home.about.desc':  'Skorzystaj z naszych serwisów premium w klimatycznych wnętrzach zabytkowej kamienicy.',
      'home.about.contact': 'Kontakt',
      'home.about.hours':   'Godziny',

      /* Pricing */
      'price.sub':   'Services & Prices',
      'price.title': 'Cennik',

      'price.cuts':          'Strzyżenia',
      'price.fringe':        'Grzywka',
      'price.short':         'Strzyżenie włosów krótkich',
      'price.medium':        'Strzyżenie włosów średnich',
      'price.long':          'Strzyżenie włosów długich',
      'price.cuts.desc':     'Oferujemy kompleksowe usługi strzyżenia, które są dostosowane do indywidualnych potrzeb każdego klienta. Nasi doświadczeni styliści zadbają o to, abyś wyszedł z naszego salonu z fryzurą, która świetnie podkreśli Twój styl i charakter.',

      'price.colour':        'Koloryzacje',
      'price.solid':         'Jednolita',
      'price.highlights':    'Refleksy',
      'price.faceframing':   'Face framing',
      'price.toning':        'Tonowanie',
      'price.colour.desc':   'Nasze usługi koloryzacji to połączenie najnowszych trendów z profesjonalizmem. Dzięki indywidualnemu podejściu do każdego klienta, tworzymy trwałe i zachwycające odcienie, które ożywią Twoje włosy i dodadzą im blasku.',

      'price.sig':           'Autorskie Serwisy',
      'price.greyblend':     'Blendowanie siwizny',
      'price.extensions':    'Przedłużanie włosów',
      'price.sig.desc':      'Odkryj naszą wyjątkową gamę Signature Services, zaprojektowaną z myślą o tych, którzy pragną doświadczyć najnowszych trendów i technik ze świata fryzjerstwa. Nasz zespół profesjonalnych stylistów łączy innowacyjność z pasją, aby zapewnić Ci usługi na najwyższym poziomie.',

      'price.4hand':         'Usługi na 4 ręce',
      'price.4hand.desc':    'Poznaj naszą unikalną ofertę usług na cztery ręce, idealną dla osób, które pragną zaoszczędzić czas, nie rezygnując jednocześnie z najwyższej jakości obsługi. To doskonała opcja dla tych, którzy pragną zrelaksować się w towarzystwie dwóch utalentowanych specjalistek.',

      'price.spa.cat':       'Head Spa – Rytuały Miriam Quevedo',
      'price.spa.label':     'Head Spa',
      'price.spa.bond':      'Doskonały rytuał naprawy wiązań',
      'price.spa.nourish':   'Rytuał odżywienie i blask',
      'price.spa.hydra':     'Rytuał nawadniający, przywracający elastyczność',
      'price.spa.platinum':  'Rytuał platinum & diamonds',
      'price.spa.desc':      'Wejdź w świat relaksu z naszym zabiegiem head spa, który przeniesie Cię w stan głębokiego odprężenia. Nasze wyjątkowe techniki oraz luksusowe produkty pielęgnacyjne sprawią, że Twoje włosy oraz skóra głowy odzyskają blask i witalność, tworząc niezapomniane doświadczenie dla zmysłów.',

      /* Banners */
      'banner.v.title': 'Vouchery',
      'banner.v.text':  'Treat someone you love with a voucher',
      'banner.v.cta':   'Dowiedz się więcej',
      'banner.s.title': 'Subskrypcja',
      'banner.s.text':  'Zdobądź subskrypcję i korzystaj z obsługi VIP',
      'banner.s.cta':   'Subskrypcja',

      /* Well Head section */
      'wh.title': 'Poznaj naszą strefę Well Head',
      'wh.from':  'Od',
      'wh.desc':  'W sercu naszego wyjątkowego miejsca kryje się niepowtarzalne doświadczenie, które łączy w sobie sztukę masażu oraz tradycję japońskiej pielęgnacji. W Strefie Well Head zapraszamy do korzystania z dwóch eleganckich gabinetów masażu, które zostały zaprojektowane z myślą o zapewnieniu atmosfery intymności i spokoju.',

      /* Team */
      'team.sub':            'Nasz Zespół',
      'team.title':          'Nasz zespół',
      'team.sara.role':      'Właścicielka i Kolorystka',
      'team.smm':            'SMM Manager',
      'team.stylist':        'Stylistka fryzur',

      /* Counters */
      'ctr.treatments': 'Zabiegów fryzjerskich',
      'ctr.products':   'Produktów salonowych',
      'ctr.shades':     'Odcieni kolorów',
      'ctr.customers':  'Zadowolonych klientek',

      /* Gallery */
      'gal.sub':   'Galeria & Portfolio',
      'gal.title': 'Galeria',
      'gal.cta':   'Zobacz wszystkie',

      /* Contact */
      'ct.info':    'Informacje',
      'ct.awards':  'Nagrody',
      'ct.form':    'Formularz kontaktowy',
      'ct.submit':  'Wyślij wiadomość',
      'ct.ph.name': 'Imię i nazwisko',
      'ct.ph.email':'Adres e-mail',
      'ct.ph.phone':'Numer telefonu',
      'ct.ph.svc':  'Rodzaj usługi',
      'ct.ph.msg':  'Wiadomość',

      /* Footer */
      'ft.about':   'O nas',
      'ft.trusted': 'Zaufanie naszych klientów.',
      'ft.contact': 'Kontakt',
      'ft.hours':   'Godziny otwarcia',

      /* Breadcrumbs */
      'bc.home':     'Strona główna',
      'bc.about':    'O nas',
      'bc.team':     'Specjaliści',
      'bc.training': 'Szkolenia',
      'bc.wellhair': 'Well Hair',
      'bc.wellhead': 'Well Head',
      'bc.subscription': 'Subskrypcja',
      'bc.headspa':   'Head SPA',

      /* About page */
      'ap.sub':   'O nas',
      'ap.title': 'Witaj w Studio Well',
      'ap.body':  'Dlaczego warto nas odwiedzić? Postanowiliśmy połączyć te dwa niezwykłe światy, aby każdy z naszych klientów mógł doświadczyć niezrównanej przyjemności i transformacji. Studio Well to oaza, w której pielęgnacja ciała harmonijnie łączy się z doskonałym stylem – to miejsce, które angażuje wszystkie zmysły i odkrywa przed Tobą nowe horyzonty relaksu oraz piękna.<br>Wyobraź sobie spokojną chwilę w Well Head, gdzie zmysłowe zabiegi relaksacyjne ukoją Twoje zmysły, a następnie przenieś się do Well Hair, gdzie nasi utalentowani styliści z pasją stworzą fryzurę, o jakiej zawsze marzyłaś. W Studio Well każda wizyta staje się nie tylko chwilą odpoczynku, ale prawdziwą podróżą ku odnowie.<br>Zanurz się w niezwykłej atmosferze, w której każdy detal jest przemyślany, aby dostarczyć Ci niezapomnianych wrażeń. Chcemy, aby nasze studio stało się miejscem, w którym poczujesz się niepowtarzalnie, zrelaksowana i olśniewająco piękna.',

      /* Well Hair page */
      'whr.sub':   'Well Hair',
      'whr.title': 'Witaj w Well Hair',
      'whr.body':  'W Well Hair posiadamy zespół wykwalifikowanych stylistów, którzy od lat tworzą fryzury, które zachwycają naszych klientów i zbierają najwyższe oceny. Z wielką starannością podchodzimy do każdego zadania, mając na uwadze indywidualne potrzeby oraz oczekiwania naszych gości.<br><br>Nasza oferta obejmuje bogaty wachlarz technik koloryzacji, strzyżeń i pielęgnacji, które pozwalają naszym klientom wyrazić swoją osobowość i styl. Bez względu na to, czy marzysz o subtelnych refleksach, odważnych kolorach, czy klasycznym cięciu – nasi styliści z łatwością sprostają Twoim wymaganiom.<br><br>Stale inwestujemy w nasz rozwój, regularnie uczestnicząc w szkoleniach i podróżując po całym świecie. Dzięki temu jesteśmy na bieżąco z najnowszymi trendami oraz technikami, co pozwala nam proponować naszym klientom usługę na najwyższym światowym poziomie.<br><br>W Well Hair każdy klient staje się dla nas priorytetem, a naszym celem jest nie tylko spełnić Twoje oczekiwania, ale również przekroczyć je, dostarczając niezapomnianych wrażeń.',

      /* Well Head page */
      'whd.sub':   'Well Head',
      'whd.title': 'Witaj w Strefie Well Head',
      'whd.body':  'W sercu naszego wyjątkowego miejsca kryje się niepowtarzalne doświadczenie, które łączy w sobie sztukę masażu oraz tradycję japońskiej pielęgnacji. W Strefie Well Head zapraszamy do korzystania z dwóch eleganckich gabinetów masażu, które zostały zaprojektowane z myślą o zapewnieniu atmosfery intymności i spokoju.<br>Nasza bogata oferta obejmuje zarówno relaksacyjne masaże twarzy, jak i pełne ciała, które skutecznie uwolnią Cię od stresu i napięcia dnia codziennego. Wyjątkowym punktem naszej propozycji jest Japanese Head Spa – niezwykłe doświadczenie, które łączy w sobie głęboką pielęgnację skóry głowy oraz harmonizujący masaż, nawiązujący do japońskich technik relaksacyjnych.',

      /* Training page */
      'tr.sub':   'Szkolenia',
      'tr.title': 'Witaj w Szkoleniach',
      'tr.body':  'W Well Hair posiadamy zespół wykwalifikowanych stylistów, którzy od lat tworzą fryzury, które zachwycają naszych klientów i zbierają najwyższe oceny. Z wielką starannością podchodzimy do każdego zadania, mając na uwadze indywidualne potrzeby oraz oczekiwania naszych gości.<br><br>Nasza oferta obejmuje bogaty wachlarz technik koloryzacji, strzyżeń i pielęgnacji, które pozwalają naszym klientom wyrazić swoją osobowość i styl.<br><br>Stale inwestujemy w nasz rozwój, regularnie uczestnicząc w szkoleniach i podróżując po całym świecie. Dzięki temu jesteśmy na bieżąco z najnowszymi trendami oraz technikami, co pozwala nam proponować naszym klientom usługę na najwyższym światowym poziomie.<br><br>W Well Hair każdy klient staje się dla nas priorytetem, a naszym celem jest nie tylko spełnić Twoje oczekiwania, ale również przekroczyć je, dostarczając niezapomnianych wrażeń.',

      /* Specialists page headings */
      'sp.about.sara':     'O Sarze Pereira',
      'sp.about.iulia':    'O Iulii Stepanenko',
      'sp.about.karolina': 'O Karolinie Suder',
      'sp.about.julianna': 'O Juliannie Rucie',
      'sp.bio.sara': 'Nazywam się Sara i jestem właścicielką Studio Well, które z pasją prowadzę od 2016 roku. Dzięki ciągłym szkoleniom oraz zdobywanemu doświadczeniu mój salon osiąga sukcesy na arenie międzynarodowej. Od 2018 roku dzielę się swoją wiedzą, prowadząc szkolenia dla fryzjerów oraz właścicieli salonów fryzjerskich, inspirując innych do rozwijania swojego rzemiosła.<br><br>W 2021 roku zostałam uhonorowana Małopolskim Znakiem Jakości, co umożliwia mi prowadzenie szkoleń współfinansowanych przez Unię Europejską, kończących się rejestrowanymi certyfikatami. Moim konikiem są koloryzacje, a szczególnie transformacje wizerunku, które dzięki dodatkowemu wykształceniu w charakteryzacji traktuję jako indywidualne projekty.<br><br>Prywatnie spełniam się jako mama małej Wandzi i mam rodzinę polsko-brazylijską, dzięki czemu każdego roku odkrywam fascynujące zakątki Brazylii. W wolnym czasie oddaję się pole dance, co pozwala mi kreatywnie wyrażać siebie i zachować równowagę.<br><br>Dla mnie ważny jest każdy klient jako całość – nie tylko włosy, ale również osobowość i potrzeby. Dzięki temu tworzę harmonijne metamorfozy, które podkreślają niepowtarzalny styl i urodę każdej osoby.',
      'sp.bio.iulia': 'Witajcie! Nazywam się Iulia i od 10 lat z pasją pracuję jako fryzjerka. Moim priorytetem jest estetyka oraz dbałość o każdy szczegół, co przekłada się na satysfakcję moich klientów. W salonie stawiam na profesjonalizm i indywidualne podejście do każdej osoby. W wolnym czasie uwielbiam gotować oraz opiekować się roślinami, które dodają wyjątkowego uroku mojemu miejscu pracy. Zapraszam do odwiedzenia mnie w salonie, gdzie wspólnie stworzymy coś niezwykłego!',
      'sp.bio.karolina': 'Mam na imię Karolina i od 15 lat z pasją wykonuję zawód fryzjerki. Specjalizuję się w koloryzacji oraz strzyżeniach damskich i męskich. Każda metamorfoza to dla mnie nowe wyzwanie, dlatego zawsze dążę do perfekcji i dbam o każdy detal. Praca z ludźmi to moja największa motywacja. Do każdego klienta podchodzę indywidualnie, słucham potrzeb i dobieram fryzurę tak, aby podkreślić naturalne piękno. Wierzę, że fryzura potrafi odmienić nie tylko wygląd, ale i samopoczucie. Nieustannie rozwijam umiejętności, śledzę trendy i uczestniczę w szkoleniach, aby oferować klientom to, co najlepsze.',
      'sp.bio.julianna': 'W Studio Well zajmuję się marketingiem oraz tworzeniem zdjęć i filmów do portfolio salonu. Moją prawdziwą pasją jest fotografia, dzięki której staram się uchwycić wyjątkowość każdej branży, w tym fryzjerskiej sztuki. Wierzę, że obrazy mają moc przyciągania i opowiadania historii. Prywatnie jestem entuzjastką podróży, co pozwala mi szukać inspiracji w różnorodnych kulturach i miejscach. Uwielbiam również aranżować przestrzeń oraz organizować eventy, aby tworzyć niezapomniane doświadczenia.',

      /* SEO */
      'seo.index.title': 'Studio Well Kraków | Salon Fryzjerski, Head Spa, Szkolenia',
      'seo.index.desc': 'Studio Well – nagradzany salon fryzjerski w Krakowie. Koloryzacja, strzyżenie, Head Spa, subskrypcja VIP. Zarezerwuj online.',
      'seo.about.title': 'O Studio Well Kraków | Well Hair i Well Head',
      'seo.about.desc': 'Poznaj Studio Well w Krakowie: przestrzeń Well Hair i Well Head, gdzie fryzjerstwo premium, pielęgnacja i relaks tworzą spójne doświadczenie.',
      'seo.wellhair.title': 'Well Hair Kraków | Koloryzacja, strzyżenie i pielęgnacja',
      'seo.wellhair.desc': 'Well Hair w Studio Well Kraków: koloryzacje, strzyżenia i pielęgnacja włosów prowadzone przez doświadczonych stylistów.',
      'seo.wellhead.title': 'Well Head Kraków | Japanese Head Spa i masaże',
      'seo.wellhead.desc': 'Well Head w Studio Well Kraków: Japanese Head Spa, masaże relaksacyjne i pielęgnacja skóry głowy w spokojnej strefie wellness.',
      'seo.team.title': 'Specjaliści Studio Well Kraków | Styliści fryzur',
      'seo.team.desc': 'Poznaj zespół Studio Well w Krakowie: doświadczonych stylistów, kolorystów i specjalistów, którzy dbają o włosy i komfort klientek.',
      'seo.training.title': 'Szkolenia fryzjerskie Kraków | Studio Well',
      'seo.training.desc': 'Szkolenia fryzjerskie Studio Well w Krakowie dla stylistów i właścicieli salonów. Koloryzacja, techniki premium i rozwój zawodowy.',
      'seo.subscription.title': 'Executive Hair Care Kraków | Subskrypcja Studio Well',
      'seo.subscription.desc': 'Miesięczna subskrypcja premium Studio Well dla wymagających klientek w Krakowie: dedykowana stylistka, priorytetowe terminy i stała opieka nad fryzurą.',
      'seo.headspa.title': 'Najlepsze Head Spa w Krakowie | WELLNESS Studio Well',
      'seo.headspa.desc': 'WELLNESS Studio Well w Krakowie: Head Spa, podejście trychologiczne i fizjoterapeutyczne, indywidualne protokoły i wsparcie skóry głowy.',
    },

    en: {
      /* Navigation */
      'nav.about':        'About Us',
      'nav.wellhair':     'Well Hair',
      'nav.wellhead':     'Well Head',
      'nav.team':         'Our Team',
      'nav.subscription': 'Membership',
      'nav.training':     'Training',
      'nav.headspa':      'Head SPA',
      'nav.book':         'Book Now',
      'nav.locate':       'Locate a Salon',
      'nav.contact':      'Contact',
      'nav.follow':       'Follow On',

      /* Hero slide 2 */
      'hero2.l1':   'Here begins',
      'hero2.l2':   'Your beauty adventure',
      'hero2.f1':   'Award-winning hair salon',
      'hero2.f2':   'Head Spa',
      'hero2.f3':   'Training',
      'hero2.btn':  'Book Now',

      /* About section */
      'home.about.sub':   'REVOLUTION IN HAIRDRESSING',
      'home.about.title': 'We care about your wellbeing',
      'home.about.desc':  'Experience our premium services in the atmospheric interiors of a historic tenement.',
      'home.about.contact': 'Contact',
      'home.about.hours':   'Hours',

      /* Pricing */
      'price.sub':   'Services & Prices',
      'price.title': 'Price List',

      'price.cuts':          'Haircuts',
      'price.fringe':        'Fringe',
      'price.short':         'Short hair cut',
      'price.medium':        'Medium hair cut',
      'price.long':          'Long hair cut',
      'price.cuts.desc':     'We offer comprehensive cutting services tailored to each client\'s individual needs. Our experienced stylists will ensure you leave our salon with a look that perfectly highlights your style and personality.',

      'price.colour':        'Colouring',
      'price.solid':         'Single colour',
      'price.highlights':    'Highlights',
      'price.faceframing':   'Face framing',
      'price.toning':        'Toning',
      'price.colour.desc':   'Our colouring services blend the latest trends with professional expertise. Through an individual approach to each client, we create lasting, stunning shades that bring your hair to life.',

      'price.sig':           'Signature Services',
      'price.greyblend':     'Grey blending',
      'price.extensions':    'Hair extensions',
      'price.sig.desc':      'Discover our unique range of Signature Services, designed for those who wish to experience the latest trends and techniques from the world of hairdressing. Our team of professional stylists combines innovation with passion.',

      'price.4hand':         '4-Hand Services',
      'price.4hand.desc':    'Discover our unique 4-hand services offer, ideal for those who want to save time without compromising on quality. A perfect option for those who wish to relax in the company of two talented specialists.',

      'price.spa.cat':       'Head Spa – Miriam Quevedo Rituals',
      'price.spa.label':     'Head Spa',
      'price.spa.bond':      'Perfect bond repair ritual',
      'price.spa.nourish':   'Nourishment & shine ritual',
      'price.spa.hydra':     'Hydration & elasticity ritual',
      'price.spa.platinum':  'Platinum & diamonds ritual',
      'price.spa.desc':      'Enter a world of relaxation with our head spa treatment that will transport you into a state of deep calm. Our unique techniques and luxurious care products will restore radiance and vitality to your hair and scalp.',

      /* Banners */
      'banner.v.title': 'Vouchers',
      'banner.v.text':  'Treat someone you love with a voucher',
      'banner.v.cta':   'Learn More',
      'banner.s.title': 'Membership',
      'banner.s.text':  'Get a subscription and enjoy VIP treatment',
      'banner.s.cta':   'Membership',

      /* Well Head section */
      'wh.title': 'Discover our Well Head zone',
      'wh.from':  'From',
      'wh.desc':  'At the heart of our unique space lies an unforgettable experience that combines the art of massage with the tradition of Japanese care. In the Well Head zone we invite you to enjoy two elegant massage rooms, designed to offer an atmosphere of intimacy and calm.',

      /* Team */
      'team.sub':            'Our Team',
      'team.title':          'Our Team',
      'team.sara.role':      'Owner & Colourist',
      'team.smm':            'SMM Manager',
      'team.stylist':        'Hair Stylist',

      /* Counters */
      'ctr.treatments': 'Hair Treatments',
      'ctr.products':   'Salon Products',
      'ctr.shades':     'Shades of Colors',
      'ctr.customers':  'Satisfied Customers',

      /* Gallery */
      'gal.sub':   'Photo Gallery & Portfolio',
      'gal.title': 'Gallery',
      'gal.cta':   'View All',

      /* Contact */
      'ct.info':    'Information',
      'ct.awards':  'Awards',
      'ct.form':    'Contact Form',
      'ct.submit':  'Send Message',
      'ct.ph.name': 'Full Name',
      'ct.ph.email':'Email Address',
      'ct.ph.phone':'Phone No',
      'ct.ph.svc':  'Type of Service',
      'ct.ph.msg':  'Message',

      /* Footer */
      'ft.about':   'About Us',
      'ft.trusted': 'Trusted by our customers.',
      'ft.contact': 'Contact Us',
      'ft.hours':   'Opening Hours',

      /* Breadcrumbs */
      'bc.home':     'Home',
      'bc.about':    'About Us',
      'bc.team':     'Our Team',
      'bc.training': 'Training',
      'bc.wellhair': 'Well Hair',
      'bc.wellhead': 'Well Head',
      'bc.subscription': 'Membership',
      'bc.headspa':   'Head SPA',

      /* About page */
      'ap.sub':   'About Us',
      'ap.title': 'Welcome to Studio Well',
      'ap.body':  'Why visit us? We decided to combine two extraordinary worlds so every client can experience unmatched pleasure and transformation. Studio Well is an oasis where body care harmoniously meets exceptional style – a place that engages all the senses and opens new horizons of relaxation and beauty.<br>Imagine a quiet moment in Well Head, where sensory relaxation treatments soothe your senses, then step into Well Hair, where our talented stylists will craft the hairstyle you\'ve always dreamed of. Every visit to Studio Well becomes not just a moment of rest, but a true journey of renewal.<br>Immerse yourself in an extraordinary atmosphere where every detail is considered to give you an unforgettable experience. We want our studio to be the place where you feel truly unique, relaxed and beautifully radiant.',

      /* Well Hair page */
      'whr.sub':   'Well Hair',
      'whr.title': 'Welcome to Well Hair',
      'whr.body':  'At Well Hair we have a team of skilled stylists who have been creating hairstyles that delight our clients for years. We approach every task with great care, keeping in mind the individual needs and expectations of each guest.<br><br>Our offer includes a wide range of colouring, cutting and care techniques that allow our clients to express their personality and style. Whether you dream of subtle highlights, bold colours or a classic cut – our stylists will easily meet your requirements.<br><br>We constantly invest in our development, regularly attending training and travelling the world. This keeps us up to date with the latest trends and techniques, allowing us to offer our clients a world-class service.<br><br>At Well Hair every client becomes our priority, and our goal is not only to meet your expectations but to exceed them.',

      /* Well Head page */
      'whd.sub':   'Well Head',
      'whd.title': 'Welcome to the Well Head Zone',
      'whd.body':  'At the heart of our unique space lies an unforgettable experience that combines the art of massage with the tradition of Japanese care. In the Well Head Zone we invite you to enjoy two elegant massage rooms designed to provide an atmosphere of intimacy and calm.<br>Our rich offer includes both relaxing facial and full body massages that will effectively free you from the stress and tension of daily life. The highlight of our offer is the Japanese Head Spa – an extraordinary experience that combines deep scalp care with a harmonising massage inspired by Japanese relaxation techniques.',

      /* Training page */
      'tr.sub':   'Training',
      'tr.title': 'Welcome to Training',
      'tr.body':  'At Well Hair we have a team of skilled stylists who have been creating hairstyles that delight our clients for years. We approach every task with great care, keeping in mind the individual needs and expectations of each guest.<br><br>Our offer includes a wide range of colouring, cutting and care techniques that allow our clients to express their personality and style.<br><br>We constantly invest in our development, regularly attending training and travelling the world. This keeps us up to date with the latest trends and techniques, allowing us to offer our clients a world-class service.<br><br>At Well Hair every client becomes our priority, and our goal is not only to meet your expectations but to exceed them.',

      /* Specialists page headings */
      'sp.about.sara':     'About Sara Pereira',
      'sp.about.iulia':    'About Iulia Stepanenko',
      'sp.about.karolina': 'About Karolina Suder',
      'sp.about.julianna': 'About Julianna Ruta',
      'sp.bio.sara': 'My name is Sara and I am the owner of Studio Well, which I have been running with passion since 2016. Through continuous training and experience, my salon has achieved international recognition. Since 2018 I have shared my knowledge by leading training for hairdressers and salon owners, inspiring others to develop their craft.<br><br>In 2021 I received the Małopolska Quality Mark, which allows me to run EU co-financed training ending with registered certificates. My favourite area is colour, especially image transformations, which I treat as individual projects thanks to my additional education in make-up and character styling.<br><br>Privately, I am the mother of little Wandzia and part of a Polish-Brazilian family, so every year I discover new parts of Brazil. In my free time I practise pole dance, which helps me express creativity and keep balance.<br><br>For me, every client matters as a whole person: not only their hair, but also their personality and needs. This is how I create harmonious transformations that highlight each person’s unique style and beauty.',
      'sp.bio.iulia': 'Hello! My name is Iulia and I have worked as a hairdresser with passion for 10 years. My priority is aesthetics and attention to every detail, which translates into client satisfaction. In the salon I focus on professionalism and an individual approach to each person. In my free time I love cooking and caring for plants, which add a special charm to my workspace. I invite you to visit me at the salon, where together we can create something beautiful.',
      'sp.bio.karolina': 'My name is Karolina and I have been working as a hairdresser with passion for 15 years. I specialise in colouring and women’s and men’s haircuts. Every transformation is a new challenge for me, so I always aim for perfection and care for every detail. Working with people is my greatest motivation. I approach every client individually, listen to their needs and choose a hairstyle that highlights their natural beauty. I believe a hairstyle can change not only appearance, but also how someone feels. I keep developing my skills, following trends and attending training so I can offer clients the best.',
      'sp.bio.julianna': 'At Studio Well I work on marketing and create photos and videos for the salon portfolio. My real passion is photography, which helps me capture the uniqueness of every industry, including the art of hairdressing. I believe images have the power to attract and tell stories. Privately, I love travel, which gives me constant inspiration from different cultures and places. I also enjoy arranging spaces and organising events to create memorable experiences.',

      /* SEO */
      'seo.index.title': 'Studio Well Kraków | Hair Salon, Head Spa, Training',
      'seo.index.desc': 'Studio Well – award-winning hair salon in Kraków. Colouring, haircuts, Head Spa, VIP membership. Book online.',
      'seo.about.title': 'About Studio Well Kraków | Well Hair and Well Head',
      'seo.about.desc': 'Discover Studio Well in Kraków: Well Hair and Well Head, where premium hairdressing, care and relaxation form one refined experience.',
      'seo.wellhair.title': 'Well Hair Kraków | Colouring, Haircuts and Hair Care',
      'seo.wellhair.desc': 'Well Hair at Studio Well Kraków: colouring, haircuts and hair care by experienced stylists.',
      'seo.wellhead.title': 'Well Head Kraków | Japanese Head Spa and Massage',
      'seo.wellhead.desc': 'Well Head at Studio Well Kraków: Japanese Head Spa, relaxing massage and scalp care in a calm wellness zone.',
      'seo.team.title': 'Studio Well Kraków Specialists | Hair Stylists',
      'seo.team.desc': 'Meet the Studio Well team in Kraków: experienced stylists, colourists and specialists caring for your hair and comfort.',
      'seo.training.title': 'Hairdressing Training Kraków | Studio Well',
      'seo.training.desc': 'Studio Well hairdressing training in Kraków for stylists and salon owners. Colouring, premium techniques and professional development.',
      'seo.subscription.title': 'Executive Hair Care Kraków | Studio Well Membership',
      'seo.subscription.desc': 'Studio Well premium monthly membership for demanding clients in Kraków: dedicated stylist, priority appointments and ongoing hair care.',
      'seo.headspa.title': 'Best Head Spa in Kraków | WELLNESS Studio Well',
      'seo.headspa.desc': 'WELLNESS Studio Well in Kraków: Head Spa, trichology and physiotherapy-informed care, individual protocols and real scalp support.',
    }
  };

  /* ── Core engine ─────────────────────────────────────────── */
  var currentLang = 'pl';

  function applyLang(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    localStorage.setItem('sw_lang', lang);

    // Update <html lang>
    document.documentElement.lang = lang;

    // Text / innerHTML elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) {
        el.innerHTML = T[lang][key];
      }
    });

    // Placeholder elements
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (T[lang][key] !== undefined) {
        el.placeholder = T[lang][key];
      }
    });

    // SEO elements
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (T[lang][key] !== undefined) {
        el.setAttribute('content', T[lang][key]);
      }
    });
    var titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) {
      var titleKey = titleEl.getAttribute('data-i18n-title');
      if (T[lang][titleKey] !== undefined) {
        document.title = T[lang][titleKey];
      }
    }

    // Full language blocks for standalone landing pages.
    document.querySelectorAll('[data-lang-content]').forEach(function (el) {
      var isActive = el.getAttribute('data-lang-content') === lang;
      el.hidden = !isActive;
      el.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    // Toggle button active state
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Aria label on html element
    document.documentElement.setAttribute('lang', lang);
  }

  /* ── Build switcher markup ────────────────────────────────── */
  function buildSwitcher(isDark) {
    var sepColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';
    return '<button class="lang-btn" data-lang="pl" onclick="swSetLang(\'pl\')">PL</button>'
         + '<span class="lang-sep" style="color:' + sepColor + '">|</span>'
         + '<button class="lang-btn" data-lang="en" onclick="swSetLang(\'en\')">EN</button>';
  }

  /* ── Init on DOM ready ────────────────────────────────────── */
  function init() {
    // Inject markup into placeholder containers
    document.querySelectorAll('.lang-switcher').forEach(function (el) {
      el.innerHTML = buildSwitcher(true);
    });
    document.querySelectorAll('.mobile-lang-switcher').forEach(function (el) {
      el.innerHTML = buildSwitcher(false);
    });
    document.querySelectorAll('.floating-lang').forEach(function (el) {
      el.innerHTML = buildSwitcher(false);
    });

    var saved = localStorage.getItem('sw_lang') || 'pl';
    applyLang(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Public API ───────────────────────────────────────────── */
  window.swSetLang = applyLang;
  window.swCurrentLang = function () { return currentLang; };

}());
