import { insertErms } from './insert-erms';

describe('insertErms helper', () => {
  const code = `<h1>Hello World</h1>
<main>
<h2>CatPhotoApp</h2>
<img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`;

  it('should throw error if erm length is less than 2', () => {
    const items = [[], [1]];

    items.forEach(item => {
      expect(() => {
        insertErms(code, item);
      }).toThrow();
    });
  });

  it('should update code with markers if provided', () => {
    const newCode = `--fcc-editable-region--
<h1>Hello World</h1>
<main>
<h2>CatPhotoApp</h2>
<img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
--fcc-editable-region--
</main>`;

    expect(insertErms(code, [0, 7])).toEqual(newCode);
  });

  it('should update code with 2 markers if more are provided', () => {
    const newCode = `<h1>Hello World</h1>
<main>
--fcc-editable-region--
<h2>CatPhotoApp</h2>
--fcc-editable-region--
<img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`;

    expect(insertErms(code, [2, 4, 6, 7])).toEqual(newCode);
  });
});
