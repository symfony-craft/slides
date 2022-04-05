var fs = require('fs');

module.exports = (markdown) => {

  return deepInclude(markdown)
}

const deepInclude = (file) => {
    return file
        .split('\n')
        .map((line, index) => {
            if(/^{{.*}}$/.test(line))
                return deepInclude(readIncludeFile(line))
            return line
        })
        .join('\n')
}

const readIncludeFile = includeCommand => {
    let fileToRead = includeCommand.replace("{{", "").replace("}}", "");
    return fs.readFileSync(fileToRead, 'utf8')
}
