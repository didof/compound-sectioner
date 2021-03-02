import { default as S } from './sectioner/Sectioner'

const App = () => {
  const styleCenter = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={styleCenter}>
      <S>
        <S.Tabs>
          <S.Tab>Section 1</S.Tab>
          <S.Tab>Section 2</S.Tab>
          <S.Tab>Section 3</S.Tab>
        </S.Tabs>
        <S.Sections>
          <S.Section>lorem</S.Section>
          <S.Section>ipsum</S.Section>
          <S.Section>ue</S.Section>
        </S.Sections>
      </S>
    </div>
  )
}

export default App
