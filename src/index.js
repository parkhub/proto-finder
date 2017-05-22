import globby from 'globby';

/**
 * Find a protofile's full path in a 'protos' directory by searching UP  from your current process.
 *
 * @module @parkhub/proto-finder
 * @author Daniel Olivares
 *
 * @example
 * import protoFinder from '@parkhub/proto-finder';
 *
 * const protoFullPath = protoFinder.findSingleFile('test');
 */

/**
 * Get the full path of a single file by it's name in the nearest 'protos' directory.
 *
 * @function findSingleFile
 * @param String fileName the name of the file to search for
 * @return {Promise<String, Error>} The full path of the file's location
 */
export async function findSingleFile(fileName) {
  const paths = await globby([`**/protos/${fileName}.proto`], {
    realpath: true
  });

  return paths[0];
}

const protoFinder = {
  findSingleFile
};

export default protoFinder;
