describe("string2", function(){
    var doubleChar = function(str){
        var result = "";
        for(var index = 0;index < str.length;index++)
            result +=  str.charAt(index)+str.charAt(index);
        return result;
    };
    it("doubleCharTest", function(){
       expect("").toEqual(doubleChar(""));
       expect("aa").toEqual(doubleChar("a"));
       expect("bb").toEqual(doubleChar("b"));
       expect("aaaa").toEqual(doubleChar("aa"));

        /*
        1. {}->null, null->constant
        2. unconditional->if , {}->null, null->constant
        3. constant->variable, add computing
        4. if to while
        */

       expect("bbbb").toEqual(doubleChar("bb"));
       expect("aabb").toEqual(doubleChar("ab"));
       expect("aaaabbbb").toEqual(doubleChar("aabb"));
       expect("aabbcc").toEqual(doubleChar("abc"));
    });
});
