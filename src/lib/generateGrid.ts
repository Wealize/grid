import generateContainer from "./generateContainer"
import generateRow from "./generateRow"
import generateColumn from "./generateColumn"


const generateGrid = () => {
  const Container = generateContainer()
  const Row = generateRow()
  const Column = generateColumn()

  return {
    Container,
    Row,
    Column,
  }
}

export default generateGrid
