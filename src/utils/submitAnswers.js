import axios from "axios";

export const submitAnswers = async (amount, difficulty) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=15&difficulty=${difficulty}&type=boolean`;

  try {
    const response = await axios.get(url);
    const newQuestions = response.data.results;
    return newQuestions;
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};
