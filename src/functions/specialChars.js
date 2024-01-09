import he from 'he';

function convertEntitiesHTML(text) {
    return he.decode(text);
}
export default convertEntitiesHTML;