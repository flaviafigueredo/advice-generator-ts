import axios from 'axios'

type AdviceResponse = {
    advice: string
    adviceID: number
} | { error: string }

export async function fetchAdvice(): Promise<AdviceResponse> {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice")

        const advice: string = response.data.slip.advice
        const adviceID: number = response.data.slip.id

        return { advice, adviceID }
    } catch (error: any) {
        const errorMessage: string = error.message

        return { error: errorMessage }
    }
}