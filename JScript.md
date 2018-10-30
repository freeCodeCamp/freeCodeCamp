# display a piechart by making Slices class & creating arc depending on the slices.

## Source code:-
```javascript
import java.awt.Color;

import java.awt.Graphics;

import java.awt.Graphics2D;

import java.awt.Rectangle;

import javax.swing.JComponent;

import javax.swing.JFrame;

class Slice {

   double value;

   Color color;

   public Slice(double value, Color color) { 

      this.value = value;

      this.color = color;

   }

}

class MyComponent extends JComponent {

   Slice[] slices = { new Slice(5, Color.black),

   new Slice(33, Color.green),

   new Slice(20, Color.yellow), new Slice(15, Color.red) };

   MyComponent() {}

   public void paint(Graphics g) {

      drawPie((Graphics2D) g, getBounds(), slices);

   }

   void drawPie(Graphics2D g, Rectangle area, Slice[] slices) {

      double total = 0.0D;

      for (int i = 0; i < slices.length; i++) {

         total += slices[i].value;

      }

      double curValue = 0.0D;

      int startAngle = 0;

      for (int i = 0; i < slices.length; i++) {

         startAngle = (int) (curValue * 360 / total);

         int arcAngle = (int) (slices[i].value * 360 / total);

         g.setColor(slices[i].color);

         g.fillArc(area.x, area.y, area.width, area.height,

         startAngle, arcAngle);

         curValue += slices[i].value;

      }

   }

}

public class Main {

   public static void main(String[] argv) {

      JFrame frame = new JFrame();

      frame.getContentPane().add(new MyComponent());

      frame.setSize(300, 200);

      frame.setVisible(true);

   }

}
```
