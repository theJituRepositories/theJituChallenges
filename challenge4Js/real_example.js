function getFile(URL){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 400) {
                resolve(this.response);
            } else {
                reject(this.status)
            }
            request.open('GET', URL, true);
            request.send();
        }
    });
}
const URL = 'https://www.api.twitter.com/bellian/statuses'

getFile(URL)
    .then(result => console.log(result))
    .catch(error => console.error(error));