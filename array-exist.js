function megaFriend(friends){
    if(Array.isArray(friends)==false){
        return 'please provide an array of string';
        }
    let mega=friends[0];
    for(const friend of friends){
        if(friend.length>mega.length){
            mega=friend;
        }
    }
    return mega;
}
const fri=['kutub','lion','shamol','sabbir'];
const myBigBuddy=megaFriend(123456);
//console.log(myBigBuddy);

if(fri.indexOf('lion') != -1){
   // console.log('lion exist');
}
if(fri.includes('lion')){
    //console.log('lion exist using includes()');
}

const first=[1,2,3,4];
const second=[4,56,8];
const combined=first.concat(second);
console.log(combined);