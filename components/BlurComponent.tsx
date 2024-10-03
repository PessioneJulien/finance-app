import { ReactNode } from 'react'
import { BlurView } from 'expo-blur' // or 'react-native-blur' for React Native projects
import { View } from 'react-native'

type BlurredProps = {
    intensity?: number
    tint?: 'light' | 'dark'
    children: ReactNode
}

export const Blurred = ({ intensity = 10, tint = 'light', children }: BlurredProps) => {
    return (
        <View>
            {children}
            <BlurView
                intensity={intensity}
                tint={tint}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            />
        </View>
    )
}

