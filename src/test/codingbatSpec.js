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
    var countHi = function(str){
        if(str === undefined || str === "")
            return 0;

        var count = 0;
        for(var index = 0; str.length > index;  index++)
            if(str.charAt(index) === 'h' && str.charAt(index + 1) === 'i')
                count++;
        return count;
    };

    it("countHiTest", function(){
        expect(0).toEqual(countHi());
        expect(0).toEqual(countHi(undefined));
        expect(0).toEqual(countHi(""));

        expect(0).toEqual(countHi("valami"));

        expect(1).toEqual(countHi("hi"));
        expect(1).toEqual(countHi("hia"));
        expect(1).toEqual(countHi("ahi"));
        expect(2).toEqual(countHi("hihi"));
    });
    var catDog = function(str){
        if(str === undefined || str === null)
            return false;
        if(str.length <= 5)
            return false;
        else
            if(str === "catdog")
                return true;
            else if(str == "dogcat")
                return true;
            else if(str.substring(0,3) == "cat" && str.substring(4,7) == "dog" )
                return true;
            else if(str.substring(0,3) == "dog" && str.substring(4,7) == "cat" )
                return true;
            else
                return false;
    };

    it("catDog", function(){
        expect(false).toBe(catDog());
        expect(false).toBe(catDog(undefined));
        expect(false).toBe(catDog(null));

        expect(false).toBe(catDog(""));
        expect(false).toBe(catDog("catdo"));
        expect(true).toBe(catDog("catdog"));
        expect(false).toBe(catDog("valami"));
        expect(true).toBe(catDog("dogcat"));
        expect(true).toBe(catDog("catxdog"));
        expect(true).toBe(catDog("dogxcat"));
//        expect(true).toBe(catDog("catxxxxxdog"));


//        expect(false).toBe(catDog("valami"));
//        expect(true).toBe(catDog("catdog"));
//        expect(true).toBe(catDog("catdoga"));
//        expect(true).toBe(catDog("acatdoga"));
    });

});
