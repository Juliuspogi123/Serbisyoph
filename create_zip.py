import os
import shutil
import zipfile

output_zip = 'public/serbisyo.ph.zip'
exclude_dirs = {'node_modules', '.git', '.aistudio', '__pycache__', '.cache'}
exclude_files = {'serbisyo-ph.zip', 'serbisyo.ph.zip', 'Serbisyo.ph.zip'}

with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.npm')]
        
        for file in files:
            if file in exclude_files or file.endswith('.zip'):
                continue
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, '.')
            print(f"Adding: {arcname}")
            zipf.write(file_path, arcname)

# Copy to alias names
shutil.copyfile(output_zip, 'public/serbisyo-ph.zip')
shutil.copyfile(output_zip, 'Serbisyo.ph.zip')

print(f"Successfully compiled all files to {output_zip} (size: {os.path.getsize(output_zip)} bytes)")

