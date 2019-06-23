// array that contains objects with information
let touristDestinations = [
    {
        name: {
            bg: `Асеновата крепост`,
            en: `Asen's fortress`
        },
        coords: {
            lat:  41.98766, 
            lng: 24.87567
        },
        information: {
            bg: `Асеновата крепост, или Петрич, са развалини на средновековна крепост с укрепената църква „Света Богородица Петричка“.`,
            en: `Asen's fortress , or Petrich , are ruins of a medieval fortress with the fortified Church of the Holy Virgin Petrich. It is located in the Rhodope Mountains 2 km away from Asenovgrad , Bulgaria . `
        },
        category: 'fortress',
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%81%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82`,
            en: `https://en.wikipedia.org/wiki/Asen%27s_Fortress`
        },
        picture: `images/Asen's fortress.jpg`
    },
    {
        name: {
            bg: `Араповски манастир`,
            en: `Arapovo Monastery`
        },
        coords: {
            lat:  42.020287, 
            lng: 24.993421
        },
        information: {
            bg: `Араповският манастир „Св. Неделя“ е български православен манастир в Асеновградска духовна околия на Пловдивска епархия на Българската православна църква`,
            en: `The Arapovo Monastery "St. Sunday is a Bulgarian Orthodox monastery in the Asenovgrad spiritual region of the Plovdiv Diocese of the Bulgarian Orthodox Church . `
        },
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%81%D0%BA%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80`,
            en: `https://en.wikipedia.org/wiki/Arapovo_Monastery`
        },
        category: 'monastery',
        picture: `images/Arapovo Monastery.jpg`
    },
    {
        name: {
            bg: `Музей на авиацията`,
            en: `Aviation Museum`
        },
        coords: {
            lat:  42.068516, 
            lng: 24.841369
        },
        information: {
            bg: `Музеят на авиацията се намира в съседство с 24-та авиобаза и летище Пловдив, на 12 км от Пловдив. Музеят притежава приблизително около 6800 експоната, 59 летателни апарата, разположени в 2 вътрешни и 1 външна експозиция, 2 ремонтно-възстановителни хангара и архивохранилище. `,
            en: `The Arapovo Monastery "St. Sunday is a Bulgarian Orthodox monastery in the Asenovgrad spiritual region of the Plovdiv Diocese of the Bulgarian Orthodox Church . `
        },
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%81%D0%BA%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80`,
            en: `https://en.wikipedia.org/wiki/Arapovo_Monastery`
        },
        category: 'museum',
        picture: `images/Arapovo Monastery.jpg`
    },
    {
        name: {
            bg: `Музей 1`,
            en: `Aviation Museum`
        },
        coords: {
            lat:  44.068516, 
            lng: 22.841369
        },
        information: {
            bg: `Музеят на авиацията се намира в съседство с 24-та авиобаза и летище Пловдив, на 12 км от Пловдив. Музеят притежава приблизително около 6800 експоната, 59 летателни апарата, разположени в 2 вътрешни и 1 външна експозиция, 2 ремонтно-възстановителни хангара и архивохранилище. `,
            en: `The Arapovo Monastery "St. Sunday is a Bulgarian Orthodox monastery in the Asenovgrad spiritual region of the Plovdiv Diocese of the Bulgarian Orthodox Church . `
        },
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%81%D0%BA%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80`,
            en: `https://en.wikipedia.org/wiki/Arapovo_Monastery`
        },
        category: 'museum',
        picture: `images/Arapovo Monastery.jpg`
    },
    {
        name: {
            bg: `Музей 2`,
            en: `Aviation Museum`
        },
        coords: {
            lat:  43.068216, 
            lng: 22.841369
        },
        information: {
            bg: `Музеят на авиацията се намира в съседство с 24-та авиобаза и летище Пловдив, на 12 км от Пловдив. Музеят притежава приблизително около 6800 експоната, 59 летателни апарата, разположени в 2 вътрешни и 1 външна експозиция, 2 ремонтно-възстановителни хангара и архивохранилище. `,
            en: `The Arapovo Monastery "St. Sunday is a Bulgarian Orthodox monastery in the Asenovgrad spiritual region of the Plovdiv Diocese of the Bulgarian Orthodox Church . `
        },
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%81%D0%BA%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80`,
            en: `https://en.wikipedia.org/wiki/Arapovo_Monastery`
        },
        category: 'museum',
        picture: `images/Arapovo Monastery.jpg`
    },
    {
        name: {
            bg: `Крепост 1`,
            en: `Aviation Museum`
        },
        coords: {
            lat:  43.068216, 
            lng: 24.841369
        },
        information: {
            bg: `Музеят на авиацията се намира в съседство с 24-та авиобаза и летище Пловдив, на 12 км от Пловдив. Музеят притежава приблизително около 6800 експоната, 59 летателни апарата, разположени в 2 вътрешни и 1 външна експозиция, 2 ремонтно-възстановителни хангара и архивохранилище. `,
            en: `The Arapovo Monastery "St. Sunday is a Bulgarian Orthodox monastery in the Asenovgrad spiritual region of the Plovdiv Diocese of the Bulgarian Orthodox Church . `
        },
        wikipediaLink: {
            bg: `https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D1%81%D0%BA%D0%B8_%D0%BC%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80`,
            en: `https://en.wikipedia.org/wiki/Arapovo_Monastery`
        },
        category: 'fortress',
        picture: `images/Arapovo Monastery.jpg`
    }
];
function setupDestinations(){
    for (let i = 0; i < touristDestinations.length; i++){
        let currentLat = touristDestinations[i].coords.lat;
        let currentLng = touristDestinations[i].coords.lng;
        let currentName = touristDestinations[i].name.bg;
        let currentCategory = touristDestinations[i].category;
        let currentInfo = touristDestinations[i].information.bg;
        let currentPicture = touristDestinations[i].picture;
        let currentLink = touristDestinations[i].wikipediaLink.bg;
        let currentIcon = `images/${currentCategory}-icon.png`;
        let greenIcon = new LeafIcon({iconUrl: currentIcon});
        L.marker([currentLat, currentLng], {icon: greenIcon}).addTo(overlays[currentCategory]).on('click', function onClick(){
            document.getElementById('title').innerHTML = currentName;
            document.getElementById('information').innerHTML = currentInfo;
            document.getElementById('destination-image').setAttribute('src', currentPicture);
            document.getElementById('link-to-wikipedia').setAttribute('href', currentLink);
        });
    }
}
setupDestinations();