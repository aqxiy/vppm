/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s==''){
        return true;
    }
    
    let lPs=[];
    for (let i=0;i<s.length;i++){
        if (s.length%2!==0){
            return false;
        }
        for (let i=0;i<s.length;i++){
            if (lPs.length===0&&(s[i]===')'||s[i]==='}'||s[i]===']')){
                return false;
            }
            else if (s[i]==='('||s[i]==='{'||s[i]==='['){
                lPs.push(s[i]);
            }
            else {
                lastLPS=lPs.pop();
                if (lastLPS==='('&&s[i]===')'||lastLPS==='{'&&s[i]==='}'||lastLPS==='['&&s[i]===']'){
                    
                }
                else{
                    return false;

                }
            }
        }
        if (lPs.length===0){
            return true;
        }
        else{
            return false;
        }
    }
};
