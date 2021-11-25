import { useEffect, useRef, useState } from 'react';
import Menu from './components/Menu'
import './App.css';
import context from 'react-bootstrap/esm/AccordionContext';

function App() {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lineColor, setLineColor] = useState('black')
  const [lineWidth, setLineWidth] = useState(5)
  const [lineOpacity, setLineOpacity] = useState(0.1)

  // initialization when component mounds for the first time
  useEffect(() => {
    // set canvas variable equal to current value of convasRef which is null
    const canvas = canvasRef.current
    // canvas.width = window.innerWidth * 2
    // canvas.height = window.innerHeight * 2
    // canvas.style.width = `${window.innerWidth}px`
    // canvas.style.height = `${window.innerHeight}px`

    // htmlcanvasElement.getContext() method returns a drawing context on the canvas. `2d` represents a two dimensional rendering context. Variable ctx instead of 'context'
    const ctx = canvas.getContext('2d')

    // Make the canvas container white
    // ctx.fillStyle = "white"
    // draws a rectangle (fill it with fill color already set)
    // 0,0 is position and size is size of canvas
    // ctx.fillRect(0,0,canvas.width,canvas.height)

    // CanvasRenderingContext2D.lineCap property of Canvas 2D api determines the shape used to draw the end points of lines
    ctx.lineCap = 'round'
    // determins the shape used to join two line segments where they meet
    ctx.lineJoin = 'round'
    // specifies the aplha(transparency) value applied to shapes and images drawn onto canvas
    ctx.globalAlpha = lineOpacity
    // specifies color, gradient, or pattern to use for the strokes(outlines) around shapes. Default is #000 black
    ctx.strokeStyle = lineColor
    // sets the thickness of lines
    ctx.lineWidth = lineWidth
    // set ctxRef current to ctx
    ctxRef.current = ctx
    // rerender when lineColor, lineOpacity, lineWidth changes
  }, [lineColor, lineOpacity, lineWidth])

  // function to start the drawing
  const startDrawing = (event) => {
    // .beginPath() method starts a new path by emptying the list of subpaths. Call this method to create a new path.
    ctxRef.current.beginPath()
    // .moveTo() begins new subpath at point specified by given (x,y) coordinates
    ctxRef.current.moveTo(
      // provides the offset int he x coordinate of the mouse pointer between that event and the padding edge of the target node
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    )
    // set setIsDrawing to boolean value of true
    setIsDrawing(true)
  }

  // function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath()
    setIsDrawing(false)
  }

  // function for actively drawing
  const draw = (event) => {
    // work clause to reduce nesting. If not drawing then return
    if (!isDrawing) {
      return
    }
    ctxRef.current.lineTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    )
    ctxRef.current.stroke()
  }

  return (
    <div className="App">
      <h1>Paint Your Soul</h1>
      <div className="draw-area">
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`852px`}
          height={`480px`}
        />
      </div>
    </div>
  );
}

export default App;
