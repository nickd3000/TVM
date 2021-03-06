

// This function loads the font data into the memory location specified.
// * There are actually 127*8 bytes - the util i made to create the data was bugged.
// * Each line represents one character
// * each byte represents one row in the character (an 8 pixel bitmap)
function _loadFont(loc)
{
    console.log("Called loadFont");

    var fontData = [
        0,0,0,0,0,0,0,0,   // 0
        24,24,24,24,0,0,24,0,   // 0
        102,102,102,0,0,0,0,0,   // 1
        102,102,255,102,255,102,102,0,   // 1
        24,62,96,60,6,124,24,0,   // 2
        98,102,12,24,48,102,70,0,   // 2
        60,102,60,56,103,102,63,0,   // 3
        6,12,24,0,0,0,0,0,   // 3
        12,24,48,48,48,24,12,0,   // 4
        48,24,12,12,12,24,48,0,   // 4
        0,102,60,255,60,102,0,0,   // 5
        0,24,24,126,24,24,0,0,   // 5
        0,0,0,0,0,24,24,48,   // 6
        0,0,0,126,0,0,0,0,   // 6
        0,0,0,0,0,24,24,0,   // 7
        3,6,12,24,48,96,0,0,   // 7
        60,102,110,118,102,102,60,0,   // 0
        24,24,56,24,24,24,126,0,   // 0
        60,102,6,12,48,96,126,0,   // 1
        60,102,6,28,6,102,60,0,   // 1
        6,14,30,102,127,6,6,0,   // 2
        126,96,124,6,6,102,60,0,   // 2
        60,102,96,124,102,102,60,0,   // 3
        126,102,12,24,24,24,24,0,   // 3
        60,102,102,60,102,102,60,0,   // 4
        60,102,102,62,6,102,60,0,   // 4
        0,0,24,0,0,24,0,0,   // 5
        0,0,24,0,0,24,24,48,   // 5
        14,24,48,96,48,24,14,0,   // 6
        0,0,126,0,126,0,0,0,   // 6
        112,24,12,6,12,24,112,0,   // 7
        60,102,6,12,24,0,24,0,   // 7
        60,102,110,110,96,98,60,0,   // 16
        24,60,102,126,102,102,102,0,   // 16
        124,102,102,124,102,102,124,0,   // 17
        60,102,96,96,96,102,60,0,   // 17
        120,108,102,102,102,108,120,0,   // 18
        126,96,96,120,96,96,126,0,   // 18
        126,96,96,120,96,96,96,0,   // 19
        60,102,96,110,102,102,60,0,   // 19
        102,102,102,126,102,102,102,0,   // 20
        60,24,24,24,24,24,60,0,   // 20
        30,12,12,12,12,108,56,0,   // 21
        102,108,120,112,120,108,102,0,   // 21
        96,96,96,96,96,96,126,0,   // 22
        99,119,127,107,99,99,99,0,   // 22
        102,118,126,126,110,102,102,0,   // 23
        60,102,102,102,102,102,60,0,   // 23
        124,102,102,124,96,96,96,0,   // 16
        60,102,102,102,102,60,14,0,   // 16
        124,102,102,124,120,108,102,0,   // 17
        60,102,96,60,6,102,60,0,   // 17
        126,24,24,24,24,24,24,0,   // 18
        102,102,102,102,102,102,60,0,   // 18
        102,102,102,102,102,60,24,0,   // 19
        99,99,99,107,127,119,99,0,   // 19
        102,102,60,24,60,102,102,0,   // 20
        102,102,102,60,24,24,24,0,   // 20
        126,6,12,24,48,96,126,0,   // 21
        60,48,48,48,48,48,60,0,   // 21
        96,48,24,12,6,3,0,0,   // 22
        60,12,12,12,12,12,60,0,   // 22
        16,40,68,0,0,0,0,0,   // 23
        0,0,0,0,0,0,255,255,   // 23
        0,48,56,0,0,0,0,0,   // 32
        0,0,60,6,62,102,62,0,   // 32
        0,96,96,124,102,102,124,0,   // 33
        0,0,60,96,96,96,60,0,   // 33
        0,6,6,62,102,102,62,0,   // 34
        0,0,60,102,126,96,60,0,   // 34
        0,14,24,62,24,24,24,0,   // 35
        0,0,62,102,102,62,6,124,   // 35
        0,96,96,124,102,102,102,0,   // 36
        0,24,0,56,24,24,60,0,   // 36
        0,6,0,6,6,6,6,60,   // 37
        0,96,96,108,120,108,102,0,   // 37
        0,56,24,24,24,24,60,0,   // 38
        0,0,102,127,127,107,99,0,   // 38
        0,0,124,102,102,102,102,0,   // 39
        0,0,60,102,102,102,60,0,   // 39
        0,0,124,102,102,124,96,96,   // 32
        0,0,62,102,102,62,6,6,   // 32
        0,0,124,102,96,96,96,0,   // 33
        0,0,62,96,60,6,124,0,   // 33
        0,24,126,24,24,24,14,0,   // 34
        0,0,102,102,102,102,62,0,   // 34
        0,0,102,102,102,60,24,0,   // 35
        0,0,99,107,127,62,54,0,   // 35
        0,0,102,60,24,60,102,0,   // 36
        0,0,102,102,102,62,12,120,   // 36
        0,0,126,12,24,48,126,0,   // 37
        0,12,16,16,32,16,16,12,   // 37
        24,24,24,24,24,24,24,24,   // 38
        0,48,8,8,4,8,8,48,   // 38
        0,0,0,96,146,12,0,0,   // 39
        0,0,0,0,0,0,0,0,   // 39
        0,0,0,255,255,0,0,0,   // 48
        8,28,62,127,127,28,62,0,   // 48
        24,24,24,24,24,24,24,24,   // 49
        0,0,0,255,255,0,0,0,   // 49
        0,0,255,255,0,0,0,0,   // 50
        0,255,255,0,0,0,0,0,   // 50
        0,0,0,0,255,255,0,0,   // 51
        48,48,48,48,48,48,48,48,   // 51
        12,12,12,12,12,12,12,12,   // 52
        0,0,0,224,240,56,24,24,   // 52
        24,24,28,15,7,0,0,0,   // 53
        24,24,56,240,224,0,0,0,   // 53
        192,192,192,192,192,192,255,255,   // 54
        192,224,112,56,28,14,7,3,   // 54
        3,7,14,28,56,112,224,192,   // 55
        255,255,192,192,192,192,192,192,   // 55
        255,255,3,3,3,3,3,3,   // 48
        0,60,126,126,126,126,60,0,   // 48
        0,0,0,0,0,255,255,0,   // 49
        54,127,127,127,62,28,8,0,   // 49
        96,96,96,96,96,96,96,96,   // 50
        0,0,0,7,15,28,24,24,   // 50
        195,231,126,60,60,126,231,195,   // 51
        0,60,126,102,102,126,60,0,   // 51
        24,24,102,102,24,24,60,0,   // 52
        6,6,6,6,6,6,6,6,   // 52
        8,28,62,127,62,28,8,0,   // 53
        24,24,24,255,255,24,24,24,   // 53
        192,192,48,48,192,192,48,48,   // 54
        24,24,24,24,24,24,24,24,   // 54
        0,0,3,62,118,54,54,0,   // 55
        255,127,63,31,15,7,3,1]   // 55

        console.log("Loading font data to address "+loc);
        for (var i=0;i<fontData.length;i++) {
            mem[loc+i] = fontData[i]|0;
        }
}
