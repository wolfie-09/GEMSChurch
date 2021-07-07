const verse = document.querySelector('.daily-verses .verse')
const reference = document.querySelector('.daily-verses .reference')


async function getDailyVerses() {
    let data = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
    let result = await data.json()
    return result
}

getDailyVerses().then(res => {
    verseDetails = res.verse.details
    verse.innerHTML = verseDetails.text
    reference.innerHTML =  `${verseDetails.reference}, ${verseDetails.version}`
})
