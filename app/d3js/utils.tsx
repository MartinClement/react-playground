type Bubble = {
  x: number,
  y: number,
  size: number,
}

const random = (min: number, max: number) => Math.floor(Math.random() * max + min);
const generateBubbles = ({ count = -1, size = -1 }: { count?: number, size?: number }): Bubble[] => {
  return Array(count > -1 ? count : random(1, 20))
    .fill(undefined)
    .map((_, index) => ({
      x: 0,
      y: 0,
      size: (size > -1) ? size : random(10, 50),
      id: index,
    }))

}

export {
  generateBubbles,
}