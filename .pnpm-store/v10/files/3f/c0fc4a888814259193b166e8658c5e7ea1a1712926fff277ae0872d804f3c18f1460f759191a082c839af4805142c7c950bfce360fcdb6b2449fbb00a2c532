// src/until.ts
var until = async (promise) => {
  try {
    const data = await promise().catch((error) => {
      throw error;
    });
    return { error: null, data };
  } catch (error) {
    return { error, data: null };
  }
};
export {
  until
};
//# sourceMappingURL=index.mjs.map