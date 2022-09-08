function jumpingOnClouds(c) {
    let jumps = 0;
    let currentIndex = 0;
    let nextIndex1;
    let nextIndex2;
    
    while (currentIndex < c.length-1) {
        nextIndex1 = currentIndex + 1;
        nextIndex2 = currentIndex + 2;
        if (c[nextIndex2] == 0) {
            currentIndex = nextIndex2;
        } else {
            currentIndex = nextIndex1;
        }
        jumps++;
    }
    
    return jumps;
}
