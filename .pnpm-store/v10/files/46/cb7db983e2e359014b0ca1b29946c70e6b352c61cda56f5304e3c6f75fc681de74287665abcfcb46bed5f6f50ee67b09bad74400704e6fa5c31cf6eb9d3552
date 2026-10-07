const util = require('../util');

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) { //Determine the tag type
                if( hasBody && isEntity(xmlData, i)){
                    i += 7; 
                    [entityName, val,i] = readEntityExp(xmlData,i+1);
                    if(val.indexOf("&") === -1) //Parameter entities are not supported
                        entities[ validateEntityName(entityName) ] = {
                            regx : RegExp( `&${entityName};`,"g"),
                            val: val
                        };
                }
                else if( hasBody && isElement(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isAttlist(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isNotation(xmlData, i)) i += 9;//Not supported
                else if( isComment)                         comment = true;
                else                                        throw new Error("Invalid DOCTYPE");

                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') { //Read tag content
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else{
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else{
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else{
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

function readEntityExp(xmlData,i){
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >

    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">

    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    
    //read EntityName
    let entityName = "";
    for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"' ); i++) {
        // if(xmlData[i] === " ") continue;
        // else 
        entityName += xmlData[i];
    }
    entityName = entityName.trim();
    if(entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

    //read Entity Value
    const startChar = xmlData[i++];
    let val = ""
    for (; i < xmlData.length && xmlData[i] !== startChar ; i++) {
        val += xmlData[i];
    }
    return [entityName, val, i];
}

function isComment(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === '-' &&
    xmlData[i+3] === '-') return true
    return false
}
function isEntity(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'N' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'I' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'Y') return true
    return false
}
function isElement(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'L' &&
    xmlData[i+4] === 'E' &&
    xmlData[i+5] === 'M' &&
    xmlData[i+6] === 'E' &&
    xmlData[i+7] === 'N' &&
    xmlData[i+8] === 'T') return true
    return false
}

function isAttlist(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'A' &&
    xmlData[i+3] === 'T' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'L' &&
    xmlData[i+6] === 'I' &&
    xmlData[i+7] === 'S' &&
    xmlData[i+8] === 'T') return true
    return false
}
function isNotation(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'N' &&
    xmlData[i+3] === 'O' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'A' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'I' &&
    xmlData[i+8] === 'O' &&
    xmlData[i+9] === 'N') return true
    return false
}

function validateEntityName(name){
    if (util.isName(name))
	return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

module.exports = readDocType;
