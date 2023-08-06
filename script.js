const displaypg = document.getElementById("displaypg");
const userinput = document.getElementById("userinput");

userinput.addEventListener("input", () => {
    const mainarr = displaypg.querySelectorAll("span");
    const userarr = userinput.value.split("");
    mainarr.forEach((spantag, index) => {
        const userchar = userarr[index];
        if (userchar == null) {
            spantag.classList.remove("right");
            spantag.classList.remove("worng");
            
        }else if (userchar === spantag.innerText) {
            spantag.classList.add("right");
            spantag.classList.remove("worng");

        } else {
            spantag.classList.remove("right");
            spantag.classList.add("worng");
        }
    })
})

function random() {

    const randompg = [
        "..But Flesch was one of the first to argue that longer sentences are harder to read. Whatever nuances of his readability index have been revised, shorter sentences still remain clearer than longer ones.",
        "Universities teach their students to skim and to scan–to read strategically rather than investing the time to review every word on a page. As a scholar moves from undergraduate to graduate student to independent researcher, they fine-tune these skills, developing high literacy within their specialized field.",
        "..messages are used by youth and adults for personal family business and social purposes governmental organizations use text messaging for communication between colleagues the sending of short informal messages has become an accepted part of many cultures as happened earlier with emailing",
        "..this makes texting a quick and easy way to communicate with friends family and colleagues including in contexts where a call would be impolite or inappropriate calling very late at night or when one knows the other person is busy with family or work activities like mail and voicemail and unlike calls in which the caller hopes to speak directly with the recipient texting does not require the caller",
        "..Ms Word, perhaps the greatest text editor for Windows, is loaded with features. One of MS Word’s several capabilities is its ability to show an assortment of various, generally invisible markings and symbols utilized to format content inside a file. It’s possible to format your text in Word by using the paragraph sign.",
        "..Many users find up not really being capable to remove the paragraph signs when they are facing Word display.  While paragraph signs may be quite useful in certain situations, they often make a file more difficult to read by making text look overly busy.",
        "..Fortunately, removing paragraph signs once Word displays them is a simple process. We have given four techniques for removing paragraph signs after Word displays them."
    ]
    
    let x = Math.floor(Math.random() * randompg.length);
    const pg = randompg[x].toLowerCase();
    let newpg = pg.replace(/[~|`|!|@|#|$|%|^|&|*|(|)|_|-|:|;|"|'|,|.]/g, "");
    newpg.split("").forEach((char) => {

        const spantag = document.createElement("span");
        spantag.innerHTML = char;
        displaypg.appendChild(spantag);
        
    })
}
random();

