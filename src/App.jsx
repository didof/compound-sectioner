import { default as S } from './sectioner/Sectioner'

const placeholder = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor a lectus id porta. Nulla mauris tellus, dignissim ac tellus quis, gravida mollis ante. Quisque aliquet vestibulum nulla, ut gravida augue dictum nec. Proin in rutrum sem. Nullam iaculis, erat at viverra sagittis, ipsum ligula dignissim arcu, in volutpat elit dolor id nisi. Suspendisse potenti. Duis luctus lacinia lorem, nec.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor vitae erat aliquam imperdiet iaculis sed diam. Pellentesque non nisl tempor, fringilla odio vitae, interdum lorem. Praesent dictum sem.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris nisi, vestibulum nec nibh eget, condimentum egestas ante. Fusce convallis justo a luctus lobortis. Aenean vestibulum posuere erat a varius. Fusce hendrerit, ligula at vehicula congue, turpis dolor facilisis sapien, a euismod lorem leo eget.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mattis tellus. Nulla facilisi. Aenean volutpat dolor nec erat aliquam, ut lobortis eros vehicula. Nunc ac tellus at neque consectetur sollicitudin quis vitae urna. Sed eu orci vel ante placerat dapibus. Nam aliquet consequat ornare. In sit amet pretium erat, quis pulvinar quam. Sed nec elit a leo interdum efficitur.',
]

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
      <S width='80%' height='80%'>
        <S.Tabs>
          <S.Tab>Section 1</S.Tab>
          <S.Tab>Section 2</S.Tab>
          <S.Tab>Section 3</S.Tab>
          <S.Tab>Section 4</S.Tab>
          <S.Tab>Section 5</S.Tab>
        </S.Tabs>
        <S.Sections>
          <S.Section>{placeholder[0]}</S.Section>
          <S.Section>{placeholder[1]}</S.Section>
          <S.Section>{placeholder[2]}</S.Section>
          <S.Section>{placeholder[3]}</S.Section>
          <S.Section>{placeholder[2]}</S.Section>
        </S.Sections>
      </S>
    </div>
  )
}

export default App
