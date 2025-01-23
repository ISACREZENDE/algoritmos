function removeItem(button) {
    // Encontra o elemento <li> pai do botão e o remove
    const listItem = button.parentElement;
    listItem.remove();
  }