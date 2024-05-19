import axios from "axios";

export async function handleGenerateQuestion(uploadFormData) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/generate-question`, uploadFormData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data.questions);
    return response.data.data.questions;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
