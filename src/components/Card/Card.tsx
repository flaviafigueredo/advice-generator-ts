import diceImg from '@assets/icon-dice.svg'


import { fetchAdvice } from '@services/adviceApi'
import { useEffect, useState } from 'react'

import { Section, AdviceID, Advice, DiceButton } from './styles'
import patternDividerDesktop from '@assets/pattern-divider-desktop.svg'
import patternDividerMobile from '@assets/pattern-divider-mobile.svg'

export function Card() {
    const [advice, setAdvice] = useState<string | null>(null)
    const [adviceID, setAdviceID] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const getAdvice = async () => {
        setLoading(true)
        const result = await fetchAdvice()

        if ('error' in result) {
            setError(result.error)
        } else {
            setAdvice(result.advice)
            setAdviceID(result.adviceID)
            setError(null)
        }
        setLoading(false)
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <Section>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred: {error}</p>
            ) : (
                <>
                    <AdviceID>Advice #{adviceID}</AdviceID>
                    <Advice>{advice}</Advice>
                    <img
                        src={
                            window.innerWidth <= 768
                                ? patternDividerMobile
                                : patternDividerDesktop
                        }
                        alt="Pattern Divider"
                        style={{ width: '100%' }}
                    />
                    <DiceButton onClick={getAdvice} aria-label="Get new advice">
                        <img src={diceImg} alt="Dice icon" />
                    </DiceButton>
                </>
            )}
        </Section>
    )
}