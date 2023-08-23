function libraryFine(d1, m1, y1, d2, m2, y2) {
    var fine = 0;
    if (y1 > y2) {
        fine = 10000;
    } else if (y1 === y2 && m1 > m2) {
        fine = 500 * (m1 - m2);
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        fine = 15 * (d1 - d2);
    }
    return fine;
}

function libraryFine(d1, m1, y1, d2, m2, y2) {
    switch (true) {
        case y1 > y2:
            return 10000;
        case y1 === y2 && m1 > m2:
            return 500 * (m1 - m2);
        case y1 === y2 && m1 === m2 && d1 > d2:
            return 15 * (d1 - d2);
        default:
            return 0;
    }
}

