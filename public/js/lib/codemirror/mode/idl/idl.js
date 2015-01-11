// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function wordRegexp(words) {
    return new RegExp('^((' + words.join(')|(') + '))\\b', 'i');
  };

  var builtinArray = [
    'a_correlate', 'abs', 'acos', 'adapt_hist_equal', 'alog',
    'alog2', 'alog10', 'amoeba', 'annotate', 'app_user_dir',
    'app_user_dir_query', 'arg_present', 'array_equal', 'array_indices',
    'arrow', 'ascii_template', 'asin', 'assoc', 'atan',
    'axis', 'axis', 'bandpass_filter', 'bandreject_filter', 'barplot',
    'bar_plot', 'beseli', 'beselj', 'beselk', 'besely',
    'beta', 'biginteger', 'bilinear', 'bin_date', 'binary_template',
    'bindgen', 'binomial', 'bit_ffs', 'bit_population', 'blas_axpy',
    'blk_con', 'boolarr', 'boolean', 'boxplot', 'box_cursor',
    'breakpoint', 'broyden', 'bubbleplot', 'butterworth', 'bytarr',
    'byte', 'byteorder', 'bytscl', 'c_correlate', 'calendar',
    'caldat', 'call_external', 'call_function', 'call_method',
    'call_procedure', 'canny', 'catch', 'cd', 'cdf', 'ceil',
    'chebyshev', 'check_math', 'chisqr_cvf', 'chisqr_pdf', 'choldc',
    'cholsol', 'cindgen', 'cir_3pnt', 'clipboard', 'close',
    'clust_wts', 'cluster', 'cluster_tree', 'cmyk_convert', 'code_coverage',
    'color_convert', 'color_exchange', 'color_quan', 'color_range_map',
    'colorbar', 'colorize_sample', 'colormap_applicable',
    'colormap_gradient', 'colormap_rotation', 'colortable',
    'comfit', 'command_line_args', 'common', 'compile_opt', 'complex',
    'complexarr', 'complexround', 'compute_mesh_normals', 'cond', 'congrid',
    'conj', 'constrained_min', 'contour', 'contour', 'convert_coord',
    'convol', 'convol_fft', 'coord2to3', 'copy_lun', 'correlate',
    'cos', 'cosh', 'cpu', 'cramer', 'createboxplotdata',
    'create_cursor', 'create_struct', 'create_view', 'crossp', 'crvlength',
    'ct_luminance', 'cti_test', 'cursor', 'curvefit', 'cv_coord',
    'cvttobm', 'cw_animate', 'cw_animate_getp', 'cw_animate_load',
    'cw_animate_run', 'cw_arcball', 'cw_bgroup', 'cw_clr_index',
    'cw_colorsel', 'cw_defroi', 'cw_field', 'cw_filesel', 'cw_form',
    'cw_fslider', 'cw_light_editor', 'cw_light_editor_get',
    'cw_light_editor_set', 'cw_orient', 'cw_palette_editor',
    'cw_palette_editor_get', 'cw_palette_editor_set', 'cw_pdmenu',
    'cw_rgbslider', 'cw_tmpl', 'cw_zoom', 'db_exists',
    'dblarr', 'dcindgen', 'dcomplex', 'dcomplexarr', 'define_key',
    'define_msgblk', 'define_msgblk_from_file', 'defroi', 'defsysv',
    'delvar', 'dendro_plot', 'dendrogram', 'deriv', 'derivsig',
    'determ', 'device', 'dfpmin', 'diag_matrix', 'dialog_dbconnect',
    'dialog_message', 'dialog_pickfile', 'dialog_printersetup',
    'dialog_printjob', 'dialog_read_image',
    'dialog_write_image', 'dictionary', 'digital_filter', 'dilate', 'dindgen',
    'dissolve', 'dist', 'distance_measure', 'dlm_load', 'dlm_register',
    'doc_library', 'double', 'draw_roi', 'edge_dog', 'efont',
    'eigenql', 'eigenvec', 'ellipse', 'elmhes', 'emboss',
    'empty', 'enable_sysrtn', 'eof', 'eos', 'erase',
    'erf', 'erfc', 'erfcx', 'erode', 'errorplot',
    'errplot', 'estimator_filter', 'execute', 'exit', 'exp',
    'expand', 'expand_path', 'expint', 'extrac', 'extract_slice',
    'f_cvf', 'f_pdf', 'factorial', 'fft', 'file_basename',
    'file_chmod', 'file_copy', 'file_delete', 'file_dirname',
    'file_expand_path', 'file_gunzip', 'file_gzip', 'file_info',
    'file_lines', 'file_link', 'file_mkdir', 'file_move',
    'file_poll_input', 'file_readlink', 'file_same',
    'file_search', 'file_tar', 'file_test', 'file_untar', 'file_unzip',
    'file_which', 'file_zip', 'filepath', 'findgen', 'finite',
    'fix', 'flick', 'float', 'floor', 'flow3',
    'fltarr', 'flush', 'format_axis_values', 'forward_function', 'free_lun',
    'fstat', 'fulstr', 'funct', 'function', 'fv_test',
    'fx_root', 'fz_roots', 'gamma', 'gamma_ct', 'gauss_cvf',
    'gauss_pdf', 'gauss_smooth', 'gauss2dfit', 'gaussfit',
    'gaussian_function', 'gaussint', 'get_drive_list', 'get_dxf_objects',
    'get_kbrd', 'get_login_info',
    'get_lun', 'get_screen_size', 'getenv', 'getwindows', 'greg2jul',
    'grib', 'grid_input', 'grid_tps', 'grid3', 'griddata',
    'gs_iter', 'h_eq_ct', 'h_eq_int', 'hanning', 'hash',
    'hdf', 'hdf5', 'heap_free', 'heap_gc', 'heap_nosave',
    'heap_refcount', 'heap_save', 'help', 'hilbert', 'hist_2d',
    'hist_equal', 'histogram', 'hls', 'hough', 'hqr',
    'hsv', 'i18n_multibytetoutf8',
    'i18n_multibytetowidechar', 'i18n_utf8tomultibyte',
    'i18n_widechartomultibyte',
    'ibeta', 'icontour', 'iconvertcoord', 'idelete', 'identity',
    'idl_base64', 'idl_container', 'idl_validname',
    'idlexbr_assistant', 'idlitsys_createtool',
    'idlunit', 'iellipse', 'igamma', 'igetcurrent', 'igetdata',
    'igetid', 'igetproperty', 'iimage', 'image', 'image_cont',
    'image_statistics', 'image_threshold', 'imaginary', 'imap', 'indgen',
    'int_2d', 'int_3d', 'int_tabulated', 'intarr', 'interpol',
    'interpolate', 'interval_volume', 'invert', 'ioctl', 'iopen',
    'ir_filter', 'iplot', 'ipolygon', 'ipolyline', 'iputdata',
    'iregister', 'ireset', 'iresolve', 'irotate', 'isa',
    'isave', 'iscale', 'isetcurrent', 'isetproperty', 'ishft',
    'isocontour', 'isosurface', 'isurface', 'itext', 'itranslate',
    'ivector', 'ivolume', 'izoom', 'journal', 'json_parse',
    'json_serialize', 'jul2greg', 'julday', 'keyword_set', 'krig2d',
    'kurtosis', 'kw_test', 'l64indgen', 'la_choldc', 'la_cholmprove',
    'la_cholsol', 'la_determ', 'la_eigenproblem', 'la_eigenql', 'la_eigenvec',
    'la_elmhes', 'la_gm_linear_model', 'la_hqr', 'la_invert',
    'la_least_square_equality', 'la_least_squares', 'la_linear_equation',
    'la_ludc', 'la_lumprove', 'la_lusol',
    'la_svd', 'la_tridc', 'la_trimprove', 'la_triql', 'la_trired',
    'la_trisol', 'label_date', 'label_region', 'ladfit', 'laguerre',
    'lambda', 'lambdap', 'lambertw', 'laplacian', 'least_squares_filter',
    'leefilt', 'legend', 'legendre', 'linbcg', 'lindgen',
    'linfit', 'linkimage', 'list', 'll_arc_distance', 'lmfit',
    'lmgr', 'lngamma', 'lnp_test', 'loadct', 'locale_get',
    'logical_and', 'logical_or', 'logical_true', 'lon64arr', 'lonarr',
    'long', 'long64', 'lsode', 'lu_complex', 'ludc',
    'lumprove', 'lusol', 'm_correlate', 'machar', 'make_array',
    'make_dll', 'make_rt', 'map', 'mapcontinents', 'mapgrid',
    'map_2points', 'map_continents', 'map_grid', 'map_image', 'map_patch',
    'map_proj_forward', 'map_proj_image', 'map_proj_info',
    'map_proj_init', 'map_proj_inverse',
    'map_set', 'matrix_multiply', 'matrix_power', 'max', 'md_test',
    'mean', 'meanabsdev', 'mean_filter', 'median', 'memory',
    'mesh_clip', 'mesh_decimate', 'mesh_issolid',
    'mesh_merge', 'mesh_numtriangles',
    'mesh_obj', 'mesh_smooth', 'mesh_surfacearea',
    'mesh_validate', 'mesh_volume',
    'message', 'min', 'min_curve_surf', 'mk_html_help', 'modifyct',
    'moment', 'morph_close', 'morph_distance',
    'morph_gradient', 'morph_hitormiss',
    'morph_open', 'morph_thin', 'morph_tophat', 'multi', 'n_elements',
    'n_params', 'n_tags', 'ncdf', 'newton', 'noise_hurl',
    'noise_pick', 'noise_scatter', 'noise_slur', 'norm', 'obj_class',
    'obj_destroy', 'obj_hasmethod', 'obj_isa', 'obj_new', 'obj_valid',
    'objarr', 'on_error', 'on_ioerror', 'online_help', 'openr',
    'openu', 'openw', 'oplot', 'oploterr', 'orderedhash',
    'p_correlate', 'parse_url', 'particle_trace', 'path_cache', 'path_sep',
    'pcomp', 'plot', 'plot3d', 'plot', 'plot_3dbox',
    'plot_field', 'ploterr', 'plots', 'polar_contour', 'polar_surface',
    'polyfill', 'polyshade', 'pnt_line', 'point_lun', 'polarplot',
    'poly', 'poly_2d', 'poly_area', 'poly_fit', 'polyfillv',
    'polygon', 'polyline', 'polywarp', 'popd', 'powell',
    'pref_commit', 'pref_get', 'pref_set', 'prewitt', 'primes',
    'print', 'printf', 'printd', 'pro', 'product',
    'profile', 'profiler', 'profiles', 'project_vol', 'ps_show_fonts',
    'psafm', 'pseudo', 'ptr_free', 'ptr_new', 'ptr_valid',
    'ptrarr', 'pushd', 'qgrid3', 'qhull', 'qromb',
    'qromo', 'qsimp', 'query_*', 'query_ascii', 'query_bmp',
    'query_csv', 'query_dicom', 'query_gif', 'query_image', 'query_jpeg',
    'query_jpeg2000', 'query_mrsid', 'query_pict', 'query_png', 'query_ppm',
    'query_srf', 'query_tiff', 'query_video', 'query_wav', 'r_correlate',
    'r_test', 'radon', 'randomn', 'randomu', 'ranks',
    'rdpix', 'read', 'readf', 'read_ascii', 'read_binary',
    'read_bmp', 'read_csv', 'read_dicom', 'read_gif', 'read_image',
    'read_interfile', 'read_jpeg', 'read_jpeg2000', 'read_mrsid', 'read_pict',
    'read_png', 'read_ppm', 'read_spr', 'read_srf', 'read_sylk',
    'read_tiff', 'read_video', 'read_wav', 'read_wave', 'read_x11_bitmap',
    'read_xwd', 'reads', 'readu', 'real_part', 'rebin',
    'recall_commands', 'recon3', 'reduce_colors', 'reform', 'region_grow',
    'register_cursor', 'regress', 'replicate',
    'replicate_inplace', 'resolve_all',
    'resolve_routine', 'restore', 'retall', 'return', 'reverse',
    'rk4', 'roberts', 'rot', 'rotate', 'round',
    'routine_filepath', 'routine_info', 'rs_test', 's_test', 'save',
    'savgol', 'scale3', 'scale3d', 'scatterplot', 'scatterplot3d',
    'scope_level', 'scope_traceback', 'scope_varfetch',
    'scope_varname', 'search2d',
    'search3d', 'sem_create', 'sem_delete', 'sem_lock', 'sem_release',
    'set_plot', 'set_shading', 'setenv', 'sfit', 'shade_surf',
    'shade_surf_irr', 'shade_volume', 'shift', 'shift_diff', 'shmdebug',
    'shmmap', 'shmunmap', 'shmvar', 'show3', 'showfont',
    'signum', 'simplex', 'sin', 'sindgen', 'sinh',
    'size', 'skewness', 'skip_lun', 'slicer3', 'slide_image',
    'smooth', 'sobel', 'socket', 'sort', 'spawn',
    'sph_4pnt', 'sph_scat', 'spher_harm', 'spl_init', 'spl_interp',
    'spline', 'spline_p', 'sprsab', 'sprsax', 'sprsin',
    'sprstp', 'sqrt', 'standardize', 'stddev', 'stop',
    'strarr', 'strcmp', 'strcompress', 'streamline', 'streamline',
    'stregex', 'stretch', 'string', 'strjoin', 'strlen',
    'strlowcase', 'strmatch', 'strmessage', 'strmid', 'strpos',
    'strput', 'strsplit', 'strtrim', 'struct_assign', 'struct_hide',
    'strupcase', 'surface', 'surface', 'surfr', 'svdc',
    'svdfit', 'svsol', 'swap_endian', 'swap_endian_inplace', 'symbol',
    'systime', 't_cvf', 't_pdf', 't3d', 'tag_names',
    'tan', 'tanh', 'tek_color', 'temporary', 'terminal_size',
    'tetra_clip', 'tetra_surface', 'tetra_volume', 'text', 'thin',
    'thread', 'threed', 'tic', 'time_test2', 'timegen',
    'timer', 'timestamp', 'timestamptovalues', 'tm_test', 'toc',
    'total', 'trace', 'transpose', 'tri_surf', 'triangulate',
    'trigrid', 'triql', 'trired', 'trisol', 'truncate_lun',
    'ts_coef', 'ts_diff', 'ts_fcast', 'ts_smooth', 'tv',
    'tvcrs', 'tvlct', 'tvrd', 'tvscl', 'typename',
    'uindgen', 'uint', 'uintarr', 'ul64indgen', 'ulindgen',
    'ulon64arr', 'ulonarr', 'ulong', 'ulong64', 'uniq',
    'unsharp_mask', 'usersym', 'value_locate', 'variance', 'vector',
    'vector_field', 'vel', 'velovect', 'vert_t3d', 'voigt',
    'volume', 'voronoi', 'voxel_proj', 'wait', 'warp_tri',
    'watershed', 'wdelete', 'wf_draw', 'where', 'widget_base',
    'widget_button', 'widget_combobox', 'widget_control',
    'widget_displaycontextmenu', 'widget_draw',
    'widget_droplist', 'widget_event', 'widget_info',
    'widget_label', 'widget_list',
    'widget_propertysheet', 'widget_slider', 'widget_tab',
    'widget_table', 'widget_text',
    'widget_tree', 'widget_tree_move', 'widget_window',
    'wiener_filter', 'window',
    'window', 'write_bmp', 'write_csv', 'write_gif', 'write_image',
    'write_jpeg', 'write_jpeg2000', 'write_nrif', 'write_pict', 'write_png',
    'write_ppm', 'write_spr', 'write_srf', 'write_sylk', 'write_tiff',
    'write_video', 'write_wav', 'write_wave', 'writeu', 'wset',
    'wshow', 'wtn', 'wv_applet', 'wv_cwt', 'wv_cw_wavelet',
    'wv_denoise', 'wv_dwt', 'wv_fn_coiflet',
    'wv_fn_daubechies', 'wv_fn_gaussian',
    'wv_fn_haar', 'wv_fn_morlet', 'wv_fn_paul',
    'wv_fn_symlet', 'wv_import_data',
    'wv_import_wavelet', 'wv_plot3d_wps', 'wv_plot_multires',
    'wv_pwt', 'wv_tool_denoise',
    'xbm_edit', 'xdisplayfile', 'xdxf', 'xfont', 'xinteranimate',
    'xloadct', 'xmanager', 'xmng_tmpl', 'xmtool', 'xobjview',
    'xobjview_rotate', 'xobjview_write_image',
    'xpalette', 'xpcolor', 'xplot3d',
    'xregistered', 'xroi', 'xsq_test', 'xsurface', 'xvaredit',
    'xvolume', 'xvolume_rotate', 'xvolume_write_image',
    'xyouts', 'zlib_compress', 'zlib_uncompress', 'zoom', 'zoom_24'
  ];
  var builtins = wordRegexp(builtinArray);

  var keywordArray = [
    'begin', 'end', 'endcase', 'endfor',
    'endwhile', 'endif', 'endrep', 'endforeach',
    'break', 'case', 'continue', 'for',
    'foreach', 'goto', 'if', 'then', 'else',
    'repeat', 'until', 'switch', 'while',
    'do', 'pro', 'function'
  ];
  var keywords = wordRegexp(keywordArray);

  CodeMirror.registerHelper("hintWords", "idl", builtinArray.concat(keywordArray));

  var identifiers = new RegExp('^[_a-z\xa1-\uffff][_a-z0-9\xa1-\uffff]*', 'i');

  var singleOperators = /[+\-*&=<>\/@#~$]/;
  var boolOperators = new RegExp('(and|or|eq|lt|le|gt|ge|ne|not)', 'i');

  function tokenBase(stream) {
    // whitespaces
    if (stream.eatSpace()) return null;

    // Handle one line Comments
    if (stream.match(';')) {
      stream.skipToEnd();
      return 'comment';
    }

    // Handle Number Literals
    if (stream.match(/^[0-9\.+-]/, false)) {
      if (stream.match(/^[+-]?0x[0-9a-fA-F]+/))
        return 'number';
      if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))
        return 'number';
      if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
        return 'number';
    }

    // Handle Strings
    if (stream.match(/^"([^"]|(""))*"/)) { return 'string'; }
    if (stream.match(/^'([^']|(''))*'/)) { return 'string'; }

    // Handle words
    if (stream.match(keywords)) { return 'keyword'; }
    if (stream.match(builtins)) { return 'builtin'; }
    if (stream.match(identifiers)) { return 'variable'; }

    if (stream.match(singleOperators) || stream.match(boolOperators)) {
      return 'operator'; }

    // Handle non-detected items
    stream.next();
    return 'error';
  };

  CodeMirror.defineMode('idl', function() {
    return {
      token: function(stream) {
        return tokenBase(stream);
      }
    };
  });

  CodeMirror.defineMIME('text/x-idl', 'idl');
});
