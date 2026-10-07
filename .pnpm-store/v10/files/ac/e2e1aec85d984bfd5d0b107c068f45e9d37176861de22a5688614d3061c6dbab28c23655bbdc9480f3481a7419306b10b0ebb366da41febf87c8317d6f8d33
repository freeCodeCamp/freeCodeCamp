import { array } from './array.js';
import { constant } from './constant.js';
import { oneof } from './oneof.js';
import { sentencesToParagraphMapper, sentencesToParagraphUnmapper, wordsToJoinedStringMapper, wordsToJoinedStringUnmapperFor, wordsToSentenceMapper, wordsToSentenceUnmapperFor, } from './_internals/mappers/WordsToLorem.js';
const h = (v, w) => {
    return { arbitrary: constant(v), weight: w };
};
function loremWord() {
    return oneof(h('non', 6), h('adipiscing', 5), h('ligula', 5), h('enim', 5), h('pellentesque', 5), h('in', 5), h('augue', 5), h('et', 5), h('nulla', 5), h('lorem', 4), h('sit', 4), h('sed', 4), h('diam', 4), h('fermentum', 4), h('ut', 4), h('eu', 4), h('aliquam', 4), h('mauris', 4), h('vitae', 4), h('felis', 4), h('ipsum', 3), h('dolor', 3), h('amet,', 3), h('elit', 3), h('euismod', 3), h('mi', 3), h('orci', 3), h('erat', 3), h('praesent', 3), h('egestas', 3), h('leo', 3), h('vel', 3), h('sapien', 3), h('integer', 3), h('curabitur', 3), h('convallis', 3), h('purus', 3), h('risus', 2), h('suspendisse', 2), h('lectus', 2), h('nec,', 2), h('ultricies', 2), h('sed,', 2), h('cras', 2), h('elementum', 2), h('ultrices', 2), h('maecenas', 2), h('massa,', 2), h('varius', 2), h('a,', 2), h('semper', 2), h('proin', 2), h('nec', 2), h('nisl', 2), h('amet', 2), h('duis', 2), h('congue', 2), h('libero', 2), h('vestibulum', 2), h('pede', 2), h('blandit', 2), h('sodales', 2), h('ante', 2), h('nibh', 2), h('ac', 2), h('aenean', 2), h('massa', 2), h('suscipit', 2), h('sollicitudin', 2), h('fusce', 2), h('tempus', 2), h('aliquam,', 2), h('nunc', 2), h('ullamcorper', 2), h('rhoncus', 2), h('metus', 2), h('faucibus,', 2), h('justo', 2), h('magna', 2), h('at', 2), h('tincidunt', 2), h('consectetur', 1), h('tortor,', 1), h('dignissim', 1), h('congue,', 1), h('non,', 1), h('porttitor,', 1), h('nonummy', 1), h('molestie,', 1), h('est', 1), h('eleifend', 1), h('mi,', 1), h('arcu', 1), h('scelerisque', 1), h('vitae,', 1), h('consequat', 1), h('in,', 1), h('pretium', 1), h('volutpat', 1), h('pharetra', 1), h('tempor', 1), h('bibendum', 1), h('odio', 1), h('dui', 1), h('primis', 1), h('faucibus', 1), h('luctus', 1), h('posuere', 1), h('cubilia', 1), h('curae,', 1), h('hendrerit', 1), h('velit', 1), h('mauris,', 1), h('gravida', 1), h('ornare', 1), h('ut,', 1), h('pulvinar', 1), h('varius,', 1), h('turpis', 1), h('nibh,', 1), h('eros', 1), h('id', 1), h('aliquet', 1), h('quis', 1), h('lobortis', 1), h('consectetuer', 1), h('morbi', 1), h('vehicula', 1), h('tortor', 1), h('tellus,', 1), h('id,', 1), h('eu,', 1), h('quam', 1), h('feugiat,', 1), h('posuere,', 1), h('iaculis', 1), h('lectus,', 1), h('tristique', 1), h('mollis,', 1), h('nisl,', 1), h('vulputate', 1), h('sem', 1), h('vivamus', 1), h('placerat', 1), h('imperdiet', 1), h('cursus', 1), h('rutrum', 1), h('iaculis,', 1), h('augue,', 1), h('lacus', 1));
}
export function lorem(constraints = {}) {
    const { maxCount, mode = 'words', size } = constraints;
    if (maxCount !== undefined && maxCount < 1) {
        throw new Error(`lorem has to produce at least one word/sentence`);
    }
    const wordArbitrary = loremWord();
    if (mode === 'sentences') {
        const sentence = array(wordArbitrary, { minLength: 1, size: 'small' }).map(wordsToSentenceMapper, wordsToSentenceUnmapperFor(wordArbitrary));
        return array(sentence, { minLength: 1, maxLength: maxCount, size }).map(sentencesToParagraphMapper, sentencesToParagraphUnmapper);
    }
    else {
        return array(wordArbitrary, { minLength: 1, maxLength: maxCount, size }).map(wordsToJoinedStringMapper, wordsToJoinedStringUnmapperFor(wordArbitrary));
    }
}
