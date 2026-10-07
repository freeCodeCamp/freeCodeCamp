import crypto from 'node:crypto';
import { promises } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { gzip, constants } from 'node:zlib';
import { stringify } from 'flatted';
import { resolve, dirname, extname, relative } from 'pathe';
import { globSync } from 'tinyglobby';
import c from 'tinyrainbow';

const types = {
    'application/andrew-inset': ['ez'],
    'application/appinstaller': ['appinstaller'],
    'application/applixware': ['aw'],
    'application/appx': ['appx'],
    'application/appxbundle': ['appxbundle'],
    'application/atom+xml': ['atom'],
    'application/atomcat+xml': ['atomcat'],
    'application/atomdeleted+xml': ['atomdeleted'],
    'application/atomsvc+xml': ['atomsvc'],
    'application/atsc-dwd+xml': ['dwd'],
    'application/atsc-held+xml': ['held'],
    'application/atsc-rsat+xml': ['rsat'],
    'application/automationml-aml+xml': ['aml'],
    'application/automationml-amlx+zip': ['amlx'],
    'application/bdoc': ['bdoc'],
    'application/calendar+xml': ['xcs'],
    'application/ccxml+xml': ['ccxml'],
    'application/cdfx+xml': ['cdfx'],
    'application/cdmi-capability': ['cdmia'],
    'application/cdmi-container': ['cdmic'],
    'application/cdmi-domain': ['cdmid'],
    'application/cdmi-object': ['cdmio'],
    'application/cdmi-queue': ['cdmiq'],
    'application/cpl+xml': ['cpl'],
    'application/cu-seeme': ['cu'],
    'application/cwl': ['cwl'],
    'application/dash+xml': ['mpd'],
    'application/dash-patch+xml': ['mpp'],
    'application/davmount+xml': ['davmount'],
    'application/dicom': ['dcm'],
    'application/docbook+xml': ['dbk'],
    'application/dssc+der': ['dssc'],
    'application/dssc+xml': ['xdssc'],
    'application/ecmascript': ['ecma'],
    'application/emma+xml': ['emma'],
    'application/emotionml+xml': ['emotionml'],
    'application/epub+zip': ['epub'],
    'application/exi': ['exi'],
    'application/express': ['exp'],
    'application/fdf': ['fdf'],
    'application/fdt+xml': ['fdt'],
    'application/font-tdpfr': ['pfr'],
    'application/geo+json': ['geojson'],
    'application/gml+xml': ['gml'],
    'application/gpx+xml': ['gpx'],
    'application/gxf': ['gxf'],
    'application/gzip': ['gz'],
    'application/hjson': ['hjson'],
    'application/hyperstudio': ['stk'],
    'application/inkml+xml': ['ink', 'inkml'],
    'application/ipfix': ['ipfix'],
    'application/its+xml': ['its'],
    'application/java-archive': ['jar', 'war', 'ear'],
    'application/java-serialized-object': ['ser'],
    'application/java-vm': ['class'],
    'application/javascript': ['*js'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/jsonml+json': ['jsonml'],
    'application/ld+json': ['jsonld'],
    'application/lgr+xml': ['lgr'],
    'application/lost+xml': ['lostxml'],
    'application/mac-binhex40': ['hqx'],
    'application/mac-compactpro': ['cpt'],
    'application/mads+xml': ['mads'],
    'application/manifest+json': ['webmanifest'],
    'application/marc': ['mrc'],
    'application/marcxml+xml': ['mrcx'],
    'application/mathematica': ['ma', 'nb', 'mb'],
    'application/mathml+xml': ['mathml'],
    'application/mbox': ['mbox'],
    'application/media-policy-dataset+xml': ['mpf'],
    'application/mediaservercontrol+xml': ['mscml'],
    'application/metalink+xml': ['metalink'],
    'application/metalink4+xml': ['meta4'],
    'application/mets+xml': ['mets'],
    'application/mmt-aei+xml': ['maei'],
    'application/mmt-usd+xml': ['musd'],
    'application/mods+xml': ['mods'],
    'application/mp21': ['m21', 'mp21'],
    'application/mp4': ['*mp4', '*mpg4', 'mp4s', 'm4p'],
    'application/msix': ['msix'],
    'application/msixbundle': ['msixbundle'],
    'application/msword': ['doc', 'dot'],
    'application/mxf': ['mxf'],
    'application/n-quads': ['nq'],
    'application/n-triples': ['nt'],
    'application/node': ['cjs'],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer',
    ],
    'application/oda': ['oda'],
    'application/oebps-package+xml': ['opf'],
    'application/ogg': ['ogx'],
    'application/omdoc+xml': ['omdoc'],
    'application/onenote': [
        'onetoc',
        'onetoc2',
        'onetmp',
        'onepkg',
        'one',
        'onea',
    ],
    'application/oxps': ['oxps'],
    'application/p2p-overlay+xml': ['relo'],
    'application/patch-ops-error+xml': ['xer'],
    'application/pdf': ['pdf'],
    'application/pgp-encrypted': ['pgp'],
    'application/pgp-keys': ['asc'],
    'application/pgp-signature': ['sig', '*asc'],
    'application/pics-rules': ['prf'],
    'application/pkcs10': ['p10'],
    'application/pkcs7-mime': ['p7m', 'p7c'],
    'application/pkcs7-signature': ['p7s'],
    'application/pkcs8': ['p8'],
    'application/pkix-attr-cert': ['ac'],
    'application/pkix-cert': ['cer'],
    'application/pkix-crl': ['crl'],
    'application/pkix-pkipath': ['pkipath'],
    'application/pkixcmp': ['pki'],
    'application/pls+xml': ['pls'],
    'application/postscript': ['ai', 'eps', 'ps'],
    'application/provenance+xml': ['provx'],
    'application/pskc+xml': ['pskcxml'],
    'application/raml+yaml': ['raml'],
    'application/rdf+xml': ['rdf', 'owl'],
    'application/reginfo+xml': ['rif'],
    'application/relax-ng-compact-syntax': ['rnc'],
    'application/resource-lists+xml': ['rl'],
    'application/resource-lists-diff+xml': ['rld'],
    'application/rls-services+xml': ['rs'],
    'application/route-apd+xml': ['rapd'],
    'application/route-s-tsid+xml': ['sls'],
    'application/route-usd+xml': ['rusd'],
    'application/rpki-ghostbusters': ['gbr'],
    'application/rpki-manifest': ['mft'],
    'application/rpki-roa': ['roa'],
    'application/rsd+xml': ['rsd'],
    'application/rss+xml': ['rss'],
    'application/rtf': ['rtf'],
    'application/sbml+xml': ['sbml'],
    'application/scvp-cv-request': ['scq'],
    'application/scvp-cv-response': ['scs'],
    'application/scvp-vp-request': ['spq'],
    'application/scvp-vp-response': ['spp'],
    'application/sdp': ['sdp'],
    'application/senml+xml': ['senmlx'],
    'application/sensml+xml': ['sensmlx'],
    'application/set-payment-initiation': ['setpay'],
    'application/set-registration-initiation': ['setreg'],
    'application/shf+xml': ['shf'],
    'application/sieve': ['siv', 'sieve'],
    'application/smil+xml': ['smi', 'smil'],
    'application/sparql-query': ['rq'],
    'application/sparql-results+xml': ['srx'],
    'application/sql': ['sql'],
    'application/srgs': ['gram'],
    'application/srgs+xml': ['grxml'],
    'application/sru+xml': ['sru'],
    'application/ssdl+xml': ['ssdl'],
    'application/ssml+xml': ['ssml'],
    'application/swid+xml': ['swidtag'],
    'application/tei+xml': ['tei', 'teicorpus'],
    'application/thraud+xml': ['tfi'],
    'application/timestamped-data': ['tsd'],
    'application/toml': ['toml'],
    'application/trig': ['trig'],
    'application/ttml+xml': ['ttml'],
    'application/ubjson': ['ubj'],
    'application/urc-ressheet+xml': ['rsheet'],
    'application/urc-targetdesc+xml': ['td'],
    'application/voicexml+xml': ['vxml'],
    'application/wasm': ['wasm'],
    'application/watcherinfo+xml': ['wif'],
    'application/widget': ['wgt'],
    'application/winhlp': ['hlp'],
    'application/wsdl+xml': ['wsdl'],
    'application/wspolicy+xml': ['wspolicy'],
    'application/xaml+xml': ['xaml'],
    'application/xcap-att+xml': ['xav'],
    'application/xcap-caps+xml': ['xca'],
    'application/xcap-diff+xml': ['xdf'],
    'application/xcap-el+xml': ['xel'],
    'application/xcap-ns+xml': ['xns'],
    'application/xenc+xml': ['xenc'],
    'application/xfdf': ['xfdf'],
    'application/xhtml+xml': ['xhtml', 'xht'],
    'application/xliff+xml': ['xlf'],
    'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
    'application/xml-dtd': ['dtd'],
    'application/xop+xml': ['xop'],
    'application/xproc+xml': ['xpl'],
    'application/xslt+xml': ['*xsl', 'xslt'],
    'application/xspf+xml': ['xspf'],
    'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
    'application/yang': ['yang'],
    'application/yin+xml': ['yin'],
    'application/zip': ['zip'],
    'application/zip+dotlottie': ['lottie'],
    'audio/3gpp': ['*3gpp'],
    'audio/aac': ['adts', 'aac'],
    'audio/adpcm': ['adp'],
    'audio/amr': ['amr'],
    'audio/basic': ['au', 'snd'],
    'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
    'audio/mobile-xmf': ['mxmf'],
    'audio/mp3': ['*mp3'],
    'audio/mp4': ['m4a', 'mp4a', 'm4b'],
    'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
    'audio/s3m': ['s3m'],
    'audio/silk': ['sil'],
    'audio/wav': ['wav'],
    'audio/wave': ['*wav'],
    'audio/webm': ['weba'],
    'audio/xm': ['xm'],
    'font/collection': ['ttc'],
    'font/otf': ['otf'],
    'font/ttf': ['ttf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'image/aces': ['exr'],
    'image/apng': ['apng'],
    'image/avci': ['avci'],
    'image/avcs': ['avcs'],
    'image/avif': ['avif'],
    'image/bmp': ['bmp', 'dib'],
    'image/cgm': ['cgm'],
    'image/dicom-rle': ['drle'],
    'image/dpx': ['dpx'],
    'image/emf': ['emf'],
    'image/fits': ['fits'],
    'image/g3fax': ['g3'],
    'image/gif': ['gif'],
    'image/heic': ['heic'],
    'image/heic-sequence': ['heics'],
    'image/heif': ['heif'],
    'image/heif-sequence': ['heifs'],
    'image/hej2k': ['hej2'],
    'image/ief': ['ief'],
    'image/jaii': ['jaii'],
    'image/jais': ['jais'],
    'image/jls': ['jls'],
    'image/jp2': ['jp2', 'jpg2'],
    'image/jpeg': ['jpg', 'jpeg', 'jpe'],
    'image/jph': ['jph'],
    'image/jphc': ['jhc'],
    'image/jpm': ['jpm', 'jpgm'],
    'image/jpx': ['jpx', 'jpf'],
    'image/jxl': ['jxl'],
    'image/jxr': ['jxr'],
    'image/jxra': ['jxra'],
    'image/jxrs': ['jxrs'],
    'image/jxs': ['jxs'],
    'image/jxsc': ['jxsc'],
    'image/jxsi': ['jxsi'],
    'image/jxss': ['jxss'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/pjpeg': ['jfif'],
    'image/png': ['png'],
    'image/sgi': ['sgi'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/t38': ['t38'],
    'image/tiff': ['tif', 'tiff'],
    'image/tiff-fx': ['tfx'],
    'image/webp': ['webp'],
    'image/wmf': ['wmf'],
    'message/disposition-notification': ['disposition-notification'],
    'message/global': ['u8msg'],
    'message/global-delivery-status': ['u8dsn'],
    'message/global-disposition-notification': ['u8mdn'],
    'message/global-headers': ['u8hdr'],
    'message/rfc822': ['eml', 'mime', 'mht', 'mhtml'],
    'model/3mf': ['3mf'],
    'model/gltf+json': ['gltf'],
    'model/gltf-binary': ['glb'],
    'model/iges': ['igs', 'iges'],
    'model/jt': ['jt'],
    'model/mesh': ['msh', 'mesh', 'silo'],
    'model/mtl': ['mtl'],
    'model/obj': ['obj'],
    'model/prc': ['prc'],
    'model/step': ['step', 'stp', 'stpnc', 'p21', '210'],
    'model/step+xml': ['stpx'],
    'model/step+zip': ['stpz'],
    'model/step-xml+zip': ['stpxz'],
    'model/stl': ['stl'],
    'model/u3d': ['u3d'],
    'model/vrml': ['wrl', 'vrml'],
    'model/x3d+binary': ['*x3db', 'x3dbz'],
    'model/x3d+fastinfoset': ['x3db'],
    'model/x3d+vrml': ['*x3dv', 'x3dvz'],
    'model/x3d+xml': ['x3d', 'x3dz'],
    'model/x3d-vrml': ['x3dv'],
    'text/cache-manifest': ['appcache', 'manifest'],
    'text/calendar': ['ics', 'ifb'],
    'text/coffeescript': ['coffee', 'litcoffee'],
    'text/css': ['css'],
    'text/csv': ['csv'],
    'text/html': ['html', 'htm', 'shtml'],
    'text/jade': ['jade'],
    'text/javascript': ['js', 'mjs'],
    'text/jsx': ['jsx'],
    'text/less': ['less'],
    'text/markdown': ['md', 'markdown'],
    'text/mathml': ['mml'],
    'text/mdx': ['mdx'],
    'text/n3': ['n3'],
    'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
    'text/richtext': ['rtx'],
    'text/rtf': ['*rtf'],
    'text/sgml': ['sgml', 'sgm'],
    'text/shex': ['shex'],
    'text/slim': ['slim', 'slm'],
    'text/spdx': ['spdx'],
    'text/stylus': ['stylus', 'styl'],
    'text/tab-separated-values': ['tsv'],
    'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
    'text/turtle': ['ttl'],
    'text/uri-list': ['uri', 'uris', 'urls'],
    'text/vcard': ['vcard'],
    'text/vtt': ['vtt'],
    'text/wgsl': ['wgsl'],
    'text/xml': ['*xml'],
    'text/yaml': ['yaml', 'yml'],
    'video/3gpp': ['3gp', '3gpp'],
    'video/3gpp2': ['3g2'],
    'video/h261': ['h261'],
    'video/h263': ['h263'],
    'video/h264': ['h264'],
    'video/iso.segment': ['m4s'],
    'video/jpeg': ['jpgv'],
    'video/jpm': ['*jpm', '*jpgm'],
    'video/mj2': ['mj2', 'mjp2'],
    'video/mp2t': ['ts', 'm2t', 'm2ts', 'mts'],
    'video/mp4': ['mp4', 'mp4v', 'mpg4'],
    'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
    'video/ogg': ['ogv'],
    'video/quicktime': ['qt', 'mov'],
    'video/webm': ['webm'],
};
Object.freeze(types);

var __classPrivateFieldGet = ({} && {}.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args) {
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args) {
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)) {
            type = type.toLowerCase();
            extensions = extensions.map((ext) => ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions) {
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred)
                    continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string')
            return null;
        const last = path.replace(/^.*[/\\]/s, '').toLowerCase();
        const ext = last.replace(/^.*\./s, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath)
            return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string')
            return null;
        type = type?.split?.(';')[0];
        return ((type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null);
    }
    getAllExtensions(type) {
        if (typeof type !== 'string')
            return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = () => {
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f"),
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();

var mime = new Mime(types)._freeze();

async function getModuleGraph(ctx, projectName, id, browser = false) {
	const graph = {};
	const externalized = new Set();
	const inlined = new Set();
	const project = ctx.getProjectByName(projectName);
	async function get(mod, seen = new Map()) {
		if (!mod || !mod.id) {
			return;
		}
		if (mod.id === "\0@vitest/browser/context") {
			return;
		}
		if (seen.has(mod)) {
			return seen.get(mod);
		}
		let id = clearId(mod.id);
		seen.set(mod, id);
		const rewrote = browser ? mod.file?.includes(project.browser.vite.config.cacheDir) ? mod.id : false : await project.vitenode.shouldExternalize(id);
		if (rewrote) {
			id = rewrote;
			externalized.add(id);
			seen.set(mod, id);
		} else {
			inlined.add(id);
		}
		const mods = Array.from(mod.importedModules).filter((i) => i.id && !i.id.includes("/vitest/dist/"));
		graph[id] = (await Promise.all(mods.map((m) => get(m, seen)))).filter(Boolean);
		return id;
	}
	if (browser && project.browser) {
		await get(project.browser.vite.moduleGraph.getModuleById(id));
	} else {
		await get(project.vite.moduleGraph.getModuleById(id));
	}
	return {
		graph,
		externalized: Array.from(externalized),
		inlined: Array.from(inlined)
	};
}
function clearId(id) {
	return id?.replace(/\?v=\w+$/, "") || "";
}

function getOutputFile(config) {
	if (!config?.outputFile) {
		return;
	}
	if (typeof config.outputFile === "string") {
		return config.outputFile;
	}
	return config.outputFile.html;
}
const distDir = resolve(fileURLToPath(import.meta.url), "../../dist");
class HTMLReporter {
	start = 0;
	ctx;
	options;
	reporterDir;
	htmlFilePath;
	constructor(options) {
		this.options = options;
	}
	async onInit(ctx) {
		this.ctx = ctx;
		this.start = Date.now();
		const htmlFile = this.options.outputFile || getOutputFile(this.ctx.config) || "html/index.html";
		const htmlFilePath = resolve(this.ctx.config.root, htmlFile);
		this.reporterDir = dirname(htmlFilePath);
		this.htmlFilePath = htmlFilePath;
		await promises.mkdir(resolve(this.reporterDir, "data"), { recursive: true });
		await promises.mkdir(resolve(this.reporterDir, "assets"), { recursive: true });
	}
	async onFinished() {
		const result = {
			paths: this.ctx.state.getPaths(),
			files: this.ctx.state.getFiles(),
			config: this.ctx.getRootProject().serializedConfig,
			unhandledErrors: this.ctx.state.getUnhandledErrors(),
			projects: this.ctx.projects.map((p) => p.name),
			moduleGraph: {},
			sources: {}
		};
		const promises$1 = [];
		const processAttachments = (task) => {
			if (task.type === "test") {
				task.annotations.forEach((annotation) => {
					const attachment = annotation.attachment;
					if (attachment) {
						promises$1.push(this.processAttachment(attachment));
					}
				});
			} else {
				task.tasks.forEach(processAttachments);
			}
		};
		promises$1.push(...result.files.map(async (file) => {
			processAttachments(file);
			const projectName = file.projectName || "";
			const resolvedConfig = this.ctx.getProjectByName(projectName).config;
			const browser = resolvedConfig.browser.enabled && resolvedConfig.browser.ui;
			result.moduleGraph[projectName] ??= {};
			result.moduleGraph[projectName][file.filepath] = await getModuleGraph(this.ctx, projectName, file.filepath, browser);
			if (!result.sources[file.filepath]) {
				try {
					result.sources[file.filepath] = await promises.readFile(file.filepath, { encoding: "utf-8" });
				} catch {}
			}
		}));
		await Promise.all(promises$1);
		await this.writeReport(stringify(result));
	}
	async processAttachment(attachment) {
		if (attachment.path) {
			// keep external resource as is, but remove body if it's set somehow
			if (attachment.path.startsWith("http://") || attachment.path.startsWith("https://")) {
				attachment.body = undefined;
				return;
			}
			const buffer = await readFile(attachment.path);
			const hash = crypto.createHash("sha1").update(buffer).digest("hex");
			const filename = hash + extname(attachment.path);
			// move the file into an html directory to make access/publishing UI easier
			await writeFile(resolve(this.reporterDir, "data", filename), buffer);
			attachment.path = filename;
			attachment.body = undefined;
			return;
		}
		if (attachment.body) {
			const buffer = typeof attachment.body === "string" ? Buffer.from(attachment.body, "base64") : Buffer.from(attachment.body);
			const hash = crypto.createHash("sha1").update(buffer).digest("hex");
			const extension = mime.getExtension(attachment.contentType || "application/octet-stream") || "dat";
			const filename = `${hash}.${extension}`;
			// store the file in html directory instead of passing down as a body
			await writeFile(resolve(this.reporterDir, "data", filename), buffer);
			attachment.path = filename;
			attachment.body = undefined;
		}
	}
	async writeReport(report) {
		const metaFile = resolve(this.reporterDir, "html.meta.json.gz");
		const promiseGzip = promisify(gzip);
		const data = await promiseGzip(report, { level: constants.Z_BEST_COMPRESSION });
		await promises.writeFile(metaFile, data, "base64");
		const ui = resolve(distDir, "client");
		// copy ui
		const files = globSync(["**/*"], {
			cwd: ui,
			expandDirectories: false
		});
		await Promise.all(files.map(async (f) => {
			if (f === "index.html") {
				const html = await promises.readFile(resolve(ui, f), "utf-8");
				const filePath = relative(this.reporterDir, metaFile);
				await promises.writeFile(this.htmlFilePath, html.replace("<!-- !LOAD_METADATA! -->", `<script>window.METADATA_PATH="${filePath}"</script>`));
			} else {
				await promises.copyFile(resolve(ui, f), resolve(this.reporterDir, f));
			}
		}));
		this.ctx.logger.log(`${c.bold(c.inverse(c.magenta(" HTML ")))} ${c.magenta("Report is generated")}`);
		this.ctx.logger.log(`${c.dim("       You can run ")}${c.bold(`npx vite preview --outDir ${relative(this.ctx.config.root, this.reporterDir)}`)}${c.dim(" to see the test results.")}`);
	}
}

export { HTMLReporter as default };
