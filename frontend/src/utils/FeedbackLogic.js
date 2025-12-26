const getFeedback=(score)=>{
    if(score>=8){
        return "Excellent performance. Sustains flexible use of features with only occasional lapses. Easy to understand throughout; accent has minimal impact on intelligibility."; // [cite: 31, 32]
    }
    if(score>=7){
        return "Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence but may take occasional pauses."; // [cite: 28]
    }
    if(score>=6){
        return "Has a wide enough vocabulary to make meaning clear in spite of inappropriacies. Generally paraphrases successfully."; // [cite: 41, 42]
    }
    return "Needs improvement: Uses a mix of simple and complex structures, but with limited flexibility and frequent mistakes."; // [cite: 44, 45]
}

export default getFeedback;